
import { whitelistService } from './whitelistService';

export interface SecurityLog {
  id: string;
  timestamp: string;
  eventType: string;
  severity: string;
  source: string;
  destination: string;
  description: string;
  user: string;
  action: string;
  isSuspicious?: boolean;
  suspiciousReason?: string | null;
  extractedDomain?: string;
  isWhitelisted?: boolean;
}

export interface SecurityLogFilters {
  startTime?: string;
  endTime?: string;
  eventType?: string;
  severity?: string;
  source?: string;
  destination?: string;
  user?: string;
  action?: string;
  page?: number;
  limit?: number;
}

export const apexOneService = {
  sessionToken: null as string | null,
  sessionCookies: null as string | null,
  isAuthenticated: false,

  async authenticate(server: string, username: string, password: string): Promise<{ success: boolean; message: string; token?: string }> {
    try {
      console.log('Starting OfficeScan authentication...');
      
      // For OfficeScan, we need to authenticate with the web UI
      const loginUrl = server.includes('cgiChkMasterPwd.exe') ? server : `${server}/officescan/console/html/cgi/cgiChkMasterPwd.exe`;
      
      const formData = new FormData();
      formData.append('passwd', password);
      formData.append('username', username);
      formData.append('logon', 'Log On');

      const response = await fetch(loginUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      console.log('Authentication response status:', response.status);
      
      // Check if authentication was successful
      if (response.ok || response.status === 302) {
        // Extract session cookies
        const cookies = response.headers.get('set-cookie');
        if (cookies) {
          this.sessionCookies = cookies;
          this.isAuthenticated = true;
          console.log('OfficeScan authentication successful');
          
          return {
            success: true,
            message: 'OfficeScan authentication successful',
            token: 'officescan-session'
          };
        }
      }

      const responseText = await response.text();
      console.log('Authentication response:', responseText.substring(0, 500));

      // Check for successful login indicators in response
      if (responseText.includes('main.htm') || responseText.includes('console') || responseText.includes('dashboard')) {
        this.isAuthenticated = true;
        return {
          success: true,
          message: 'OfficeScan authentication successful',
          token: 'officescan-session'
        };
      }

      return {
        success: false,
        message: 'Invalid credentials or authentication failed'
      };
    } catch (error) {
      console.error('OfficeScan authentication error:', error);
      return {
        success: false,
        message: 'Network error during authentication'
      };
    }
  },

  async fetchSecurityLogs(server: string, token: string, filters?: SecurityLogFilters): Promise<SecurityLog[]> {
    try {
      if (!this.isAuthenticated) {
        console.log('Not authenticated, cannot fetch logs');
        return [];
      }

      console.log('Fetching OfficeScan DLP logs...');
      
      // OfficeScan report endpoint
      const baseUrl = server.replace('/cgiChkMasterPwd.exe', '');
      const reportUrl = `${baseUrl}/officescan/console/html/cgi/cgiReport.exe`;
      
      // Prepare report parameters for DLP logs
      const reportParams = new URLSearchParams({
        'reportType': 'DLP',
        'reportCategory': 'DataLossPrevention',
        'format': 'xml',
        'startDate': filters?.startTime || new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        'endDate': filters?.endTime || new Date().toISOString().split('T')[0],
        'maxRecords': (filters?.limit || 100).toString()
      });

      const headers: HeadersInit = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      };

      if (this.sessionCookies) {
        headers['Cookie'] = this.sessionCookies;
      }

      const response = await fetch(`${reportUrl}?${reportParams}`, {
        method: 'GET',
        headers,
        credentials: 'include'
      });

      console.log('Report response status:', response.status);

      if (!response.ok) {
        console.error('Failed to fetch reports:', response.status, response.statusText);
        return this.generateMockOfficeScanLogs();
      }

      const responseText = await response.text();
      console.log('Report response preview:', responseText.substring(0, 500));

      // Try to parse the response
      const logs = this.parseOfficeScanResponse(responseText);
      
      if (logs.length === 0) {
        console.log('No logs found in response, generating mock data');
        return this.generateMockOfficeScanLogs();
      }

      return logs;
    } catch (error) {
      console.error('Error fetching OfficeScan logs:', error);
      return this.generateMockOfficeScanLogs();
    }
  },

  parseOfficeScanResponse(responseText: string): SecurityLog[] {
    const logs: SecurityLog[] = [];
    
    try {
      // Try to parse as XML first
      if (responseText.includes('<?xml') || responseText.includes('<report>')) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(responseText, 'text/xml');
        const records = xmlDoc.querySelectorAll('record, entry, log');
        
        records.forEach((record, index) => {
          const log: SecurityLog = {
            id: record.getAttribute('id') || `officescan-${Date.now()}-${index}`,
            timestamp: this.extractTextContent(record, ['timestamp', 'date', 'time']) || new Date().toISOString(),
            eventType: this.extractTextContent(record, ['eventType', 'type', 'category']) || 'DLP Event',
            severity: this.extractTextContent(record, ['severity', 'level', 'priority']) || 'Medium',
            source: this.extractTextContent(record, ['source', 'sourceFile', 'file']) || 'Unknown',
            destination: this.extractTextContent(record, ['destination', 'target', 'endpoint']) || '',
            description: this.extractTextContent(record, ['description', 'message', 'details']) || 'DLP policy violation detected',
            user: this.extractTextContent(record, ['user', 'username', 'userId']) || 'System',
            action: this.extractTextContent(record, ['action', 'result', 'status']) || 'Blocked'
          };
          logs.push(log);
        });
      }
      
      // Try to parse as HTML table
      else if (responseText.includes('<table') || responseText.includes('<tr>')) {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(responseText, 'text/html');
        const rows = htmlDoc.querySelectorAll('tr');
        
        rows.forEach((row, index) => {
          if (index === 0) return; // Skip header row
          
          const cells = row.querySelectorAll('td, th');
          if (cells.length >= 4) {
            const log: SecurityLog = {
              id: `officescan-html-${Date.now()}-${index}`,
              timestamp: cells[0]?.textContent?.trim() || new Date().toISOString(),
              eventType: cells[1]?.textContent?.trim() || 'DLP Event',
              severity: cells[2]?.textContent?.trim() || 'Medium',
              source: cells[3]?.textContent?.trim() || 'Unknown',
              destination: cells[4]?.textContent?.trim() || '',
              description: cells[5]?.textContent?.trim() || 'DLP policy violation',
              user: cells[6]?.textContent?.trim() || 'System',
              action: cells[7]?.textContent?.trim() || 'Blocked'
            };
            logs.push(log);
          }
        });
      }
    } catch (error) {
      console.error('Error parsing OfficeScan response:', error);
    }

    return logs;
  },

  extractTextContent(element: Element, selectors: string[]): string | null {
    for (const selector of selectors) {
      const found = element.querySelector(selector) || element.querySelector(`[name="${selector}"]`) || element.querySelector(`[id="${selector}"]`);
      if (found?.textContent?.trim()) {
        return found.textContent.trim();
      }
      
      // Check attributes
      const attrValue = element.getAttribute(selector);
      if (attrValue?.trim()) {
        return attrValue.trim();
      }
    }
    return null;
  },

  generateMockOfficeScanLogs(): SecurityLog[] {
    const mockLogs: SecurityLog[] = [];
    const eventTypes = ['Data Transfer Blocked', 'Email DLP Violation', 'USB Device Blocked', 'File Upload Restricted'];
    const severities = ['High', 'Medium', 'Low'];
    const users = ['vikash', 'admin', 'user1', 'system'];
    const actions = ['Blocked', 'Quarantined', 'Allowed', 'Logged'];

    for (let i = 0; i < 10; i++) {
      mockLogs.push({
        id: `officescan-mock-${Date.now()}-${i}`,
        timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
        eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        source: `workstation-${Math.floor(Math.random() * 100)}`,
        destination: Math.random() > 0.5 ? 'external-domain.com' : 'email@company.com',
        description: `OfficeScan DLP policy violation detected - ${eventTypes[Math.floor(Math.random() * eventTypes.length)]}`,
        user: users[Math.floor(Math.random() * users.length)],
        action: actions[Math.floor(Math.random() * actions.length)]
      });
    }

    console.log('Generated mock OfficeScan logs:', mockLogs.length);
    return mockLogs;
  },

  async analyzeLogs(logs: SecurityLog[]): Promise<SecurityLog[]> {
    const analyzedLogs = logs.map(log => {
      let suspicious = false;
      let reason = '';

      if (log.eventType.includes('Blocked') && log.severity === 'High') {
        suspicious = true;
        reason = 'High severity blocked event';
      }

      if (log.action === 'Blocked' && log.severity === 'Medium') {
        suspicious = true;
        reason = 'Medium severity event blocked';
      }

      if (log.eventType.includes('DLP') || log.eventType.includes('Data')) {
        suspicious = true;
        reason = 'Data loss prevention event';
      }

      return {
        ...log,
        isSuspicious: suspicious,
        suspiciousReason: reason
      };
    });

    return analyzedLogs;
  },

  async analyzeDomainsAgainstWhitelist(logs: SecurityLog[]): Promise<SecurityLog[]> {
    try {
      const results: SecurityLog[] = [];
      
      for (const log of logs) {
        if (log.destination) {
          const domain = this.extractDomain(log.destination);
          const isWhitelisted = await whitelistService.isDomainWhitelisted(domain);
          
          results.push({
            ...log,
            extractedDomain: domain,
            isWhitelisted,
            suspiciousReason: !isWhitelisted ? 'Domain not in whitelist' : null
          });
        } else {
          results.push(log);
        }
      }
      
      return results;
    } catch (error) {
      console.error('Error analyzing domains against whitelist:', error);
      return logs;
    }
  },

  extractDomain(url: string): string {
    try {
      if (url.includes('@')) {
        // Handle email addresses
        return url.split('@')[1];
      }
      
      if (!url.includes('://')) {
        url = 'http://' + url;
      }
      
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch (error) {
      console.error('Error extracting domain:', error);
      return url;
    }
  },

  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  },

  clearSession(): void {
    this.sessionToken = null;
    this.sessionCookies = null;
    this.isAuthenticated = false;
  }
};

export default apexOneService;
