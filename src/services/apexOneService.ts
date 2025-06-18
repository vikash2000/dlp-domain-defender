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
  async analyzeLogs(logs: SecurityLog[]): Promise<SecurityLog[]> {
    const analyzedLogs = logs.map(log => {
      let suspicious = false;
      let reason = '';

      if (log.eventType === 'Malware Detected' && log.severity === 'High') {
        suspicious = true;
        reason = 'High severity malware detected';
      }

      if (log.action === 'Blocked' && log.severity === 'Medium') {
        suspicious = true;
        reason = 'Medium severity event blocked';
      }

      return {
        ...log,
        isSuspicious: suspicious,
        suspiciousReason: reason
      };
    });

    return analyzedLogs;
  },

  async authenticate(server: string, username: string, password: string): Promise<{ success: boolean; message: string; token?: string }> {
    try {
      const url = `https://${server}/api/login`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          domain: 'local'
        })
      });

      const data: any = await response.json();

      if (response.ok && data.token) {
        return {
          success: true,
          message: 'Authentication successful',
          token: data.token
        };
      } else {
        return {
          success: false,
          message: data.message || 'Authentication failed'
        };
      }
    } catch (error) {
      console.error('Authentication error:', error);
      return {
        success: false,
        message: 'Network error during authentication'
      };
    }
  },

  async fetchSecurityLogs(server: string, token: string, filters?: SecurityLogFilters): Promise<SecurityLog[]> {
    try {
      let url = `https://${server}/api/security_logs?`;

      if (filters) {
        Object.keys(filters).forEach(key => {
          if (filters[key]) {
            url += `${key}=${filters[key]}&`;
          }
        });
      }

      url = url.slice(0, -1);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });

      const data: any = await response.json();

      if (response.ok && data.logs && Array.isArray(data.logs)) {
        return data.logs.map((log: any) => ({
          id: log.id || Math.random().toString(),
          timestamp: log.timestamp || new Date().toISOString(),
          eventType: log.eventType || log.event_type || 'Unknown',
          severity: log.severity || 'Medium',
          source: log.source || 'Unknown',
          destination: log.destination || '',
          description: log.description || log.message || '',
          user: log.user || log.username || 'Unknown',
          action: log.action || 'Unknown'
        }));
      } else {
        console.error('Invalid response format:', data);
        return [];
      }
    } catch (error) {
      console.error('Error fetching security logs:', error);
      return [];
    }
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
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch (error) {
      console.error('Error extracting domain:', error);
      return url;
    }
  }
};
