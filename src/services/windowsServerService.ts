import axios from 'axios';
import { DLPLogEntry } from './dlpService';
import { windowsServerConfig } from '@/config/windowsServer';

interface ReportData {
  logs: any[];
  timestamp: string;
  totalRecords: number;
}

class WindowsServerService {
  private sessionToken: string | null = null;
  private lastLoginTime: number = 0;
  private isAuthenticated: boolean = false;

  /**
   * Authenticate with Windows server and get session token
   */
  private async authenticate(): Promise<string> {
    try {
      console.log('Authenticating with Windows server...');
      
      let response;
      
      switch (windowsServerConfig.authMethod) {
        case 'form':
          // Form-based authentication (most common for Windows servers)
          response = await axios.post(`${windowsServerConfig.serverUrl}/login`, {
            username: windowsServerConfig.username,
            password: windowsServerConfig.password
          }, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
          break;
          
        case 'basic':
          // Basic authentication
          const credentials = btoa(`${windowsServerConfig.username}:${windowsServerConfig.password}`);
          response = await axios.post(`${windowsServerConfig.serverUrl}/login`, {}, {
            headers: {
              'Authorization': `Basic ${credentials}`,
              'Content-Type': 'application/json'
            }
          });
          break;
          
        default:
          throw new Error(`Unsupported authentication method: ${windowsServerConfig.authMethod}`);
      }

      // Extract session token from response
      const token = this.extractSessionToken(response);
      
      if (!token) {
        throw new Error('Failed to extract session token from login response');
      }

      this.sessionToken = token;
      this.lastLoginTime = Date.now();
      this.isAuthenticated = true;
      
      console.log('Successfully authenticated with Windows server');
      return token;
    } catch (error) {
      console.error('Authentication failed:', error);
      this.isAuthenticated = false;
      throw new Error('Failed to authenticate with Windows server');
    }
  }

  /**
   * Extract session token from login response
   * This method needs to be customized based on your server's response format
   */
  private extractSessionToken(response: any): string | null {
    // Method 1: Check cookies
    if (response.headers['set-cookie']) {
      const cookies = response.headers['set-cookie'];
      const sessionCookie = cookies.find((cookie: string) => 
        cookie.includes('session') || cookie.includes('token') || cookie.includes('auth')
      );
      if (sessionCookie) {
        return sessionCookie.split(';')[0].split('=')[1];
      }
    }

    // Method 2: Check response body
    if (response.data && response.data.token) {
      return response.data.token;
    }

    // Method 3: Check response headers
    if (response.headers['authorization']) {
      return response.headers['authorization'].replace('Bearer ', '');
    }

    return null;
  }

  /**
   * Check if session is still valid
   */
  private isSessionValid(): boolean {
    if (!this.sessionToken || !this.isAuthenticated) return false;
    
    const sessionAge = Date.now() - this.lastLoginTime;
    return sessionAge < windowsServerConfig.sessionTimeout;
  }

  /**
   * Get authenticated headers for API requests
   */
  private async getAuthHeaders(): Promise<Record<string, string>> {
    if (!this.isSessionValid()) {
      await this.authenticate();
    }

    return {
      'Authorization': `Bearer ${this.sessionToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'DLP-Domain-Defender/1.0'
    };
  }

  /**
   * Fetch DLP logs from Windows server report
   */
  async fetchDLPReport(startDate?: string, endDate?: string): Promise<DLPLogEntry[]> {
    try {
      const headers = await this.getAuthHeaders();
      
      // Build report request parameters
      const params: any = {
        ...windowsServerConfig.defaultReportParams,
        format: windowsServerConfig.reportFormat,
        limit: windowsServerConfig.maxLogsPerRequest
      };

      if (startDate) params.startDate = startDate;
      if (endDate) params.endDate = endDate;

      console.log('Fetching DLP report from Windows server...');
      
      const response = await axios.get(`${windowsServerConfig.serverUrl}${windowsServerConfig.reportEndpoint}`, {
        headers,
        params,
        timeout: 30000 // 30 second timeout
      });

      // Parse and transform the report data
      const reportData = this.parseReportData(response.data);
      
      console.log(`Successfully fetched ${reportData.logs.length} DLP log entries`);
      return reportData.logs;
    } catch (error) {
      console.error('Failed to fetch DLP report:', error);
      throw new Error('Failed to fetch DLP report from Windows server');
    }
  }

  /**
   * Parse and transform report data to DLPLogEntry format
   * This method needs to be customized based on your server's report format
   */
  private parseReportData(data: any): ReportData {
    const logs: DLPLogEntry[] = [];

    // This is a generic parser - you'll need to customize this based on your server's report format
    if (data && Array.isArray(data.records)) {
      logs.push(...data.records.map((record: any, index: number) => this.transformLogEntry(record, index)));
    } else if (data && Array.isArray(data)) {
      logs.push(...data.map((record: any, index: number) => this.transformLogEntry(record, index)));
    } else if (data && data.logs && Array.isArray(data.logs)) {
      logs.push(...data.logs.map((record: any, index: number) => this.transformLogEntry(record, index)));
    } else if (data && data.data && Array.isArray(data.data)) {
      logs.push(...data.data.map((record: any, index: number) => this.transformLogEntry(record, index)));
    }

    return {
      logs,
      timestamp: new Date().toISOString(),
      totalRecords: logs.length
    };
  }

  /**
   * Transform server log entry to DLPLogEntry format
   * Customize this method based on your server's log format
   */
  private transformLogEntry(record: any, index: number): DLPLogEntry {
    return {
      id: record.id || record.logId || `log-${Date.now()}-${index}`,
      timestamp: new Date(record.timestamp || record.date || record.time || record.createdAt || Date.now()),
      severity: this.mapSeverity(record.severity || record.level || record.priority || 'medium'),
      type: record.type || record.eventType || record.category || record.eventCategory || 'Unknown Event',
      message: record.message || record.description || record.details || record.summary || 'No description available',
      user: record.user || record.username || record.userId || record.userName || 'Unknown User',
      source: record.source || record.fileName || record.filePath || record.sourceFile || 'Unknown Source',
      policy: record.policy || record.ruleName || record.rule || record.policyName || 'Default Policy',
      action: record.action || record.result || record.status || record.actionTaken || 'Logged',
      riskScore: this.calculateRiskScore(record),
      endpoint: record.endpoint || record.device || record.machine || record.computerName || undefined,
      domain: record.domain || record.domainName || record.targetDomain || undefined,
      ipAddress: record.ipAddress || record.sourceIP || record.clientIP || record.sourceAddress || undefined,
      ruleName: record.ruleName || record.policy || record.rule || undefined,
      template: record.template || record.fileType || record.contentType || undefined,
      destination: record.destination || record.target || record.targetPath || undefined,
      process: record.process || record.application || record.appName || undefined,
      channelName: record.channel || record.protocol || record.transferMethod || undefined,
      fileClass: record.fileClass || record.fileType || record.contentClass || undefined,
      violationId: record.violationId || record.incidentId || record.caseId || undefined,
      dataSize: record.dataSize || record.fileSize || record.contentSize || undefined
    };
  }

  /**
   * Map server severity levels to application severity levels
   */
  private mapSeverity(serverSeverity: string): 'critical' | 'high' | 'medium' | 'low' {
    const severity = serverSeverity.toLowerCase();
    
    if (severity.includes('critical') || severity.includes('fatal') || severity.includes('emergency')) {
      return 'critical';
    } else if (severity.includes('high') || severity.includes('error') || severity.includes('severe')) {
      return 'high';
    } else if (severity.includes('medium') || severity.includes('warning') || severity.includes('moderate')) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  /**
   * Calculate risk score based on log entry data
   */
  private calculateRiskScore(record: any): number {
    let score = 5; // Default medium risk

    // Adjust based on severity
    const severity = this.mapSeverity(record.severity || 'medium');
    switch (severity) {
      case 'critical': score += 3; break;
      case 'high': score += 2; break;
      case 'medium': score += 1; break;
      case 'low': score -= 1; break;
    }

    // Adjust based on action
    const action = (record.action || '').toLowerCase();
    if (action.includes('block') || action.includes('quarantine')) {
      score += 2;
    } else if (action.includes('allow') || action.includes('permit')) {
      score -= 1;
    }

    // Adjust based on file type
    const fileType = (record.fileType || '').toLowerCase();
    if (fileType.includes('exe') || fileType.includes('dll') || fileType.includes('bat')) {
      score += 1;
    }

    return Math.max(1, Math.min(10, score));
  }

  /**
   * Get recent DLP logs (last N minutes)
   */
  async getRecentLogs(minutes: number = 5): Promise<DLPLogEntry[]> {
    const endDate = new Date().toISOString();
    const startDate = new Date(Date.now() - minutes * 60 * 1000).toISOString();
    
    return this.fetchDLPReport(startDate, endDate);
  }

  /**
   * Get DLP logs for a specific date range
   */
  async getLogsByDateRange(startDate: string, endDate: string): Promise<DLPLogEntry[]> {
    return this.fetchDLPReport(startDate, endDate);
  }

  /**
   * Test connection to Windows server
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.authenticate();
      return true;
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }

  /**
   * Logout from Windows server
   */
  async logout(): Promise<void> {
    if (this.sessionToken) {
      try {
        await axios.post(`${windowsServerConfig.serverUrl}/logout`, {}, {
          headers: await this.getAuthHeaders()
        });
      } catch (error) {
        console.warn('Logout failed:', error);
      } finally {
        this.sessionToken = null;
        this.lastLoginTime = 0;
        this.isAuthenticated = false;
      }
    }
  }
}

export default WindowsServerService; 