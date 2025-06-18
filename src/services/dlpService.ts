
import { apexOneService } from './apexOneService';
import { isWindowsServerConfigured, windowsServerConfig } from '@/config/windowsServer';

export interface DLPLogEntry {
  id: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: string;
  message: string;
  user: string;
  source: string;
  policy: string;
  action: string;
  riskScore: number;
}

export interface DLPStats {
  activePolicies: number;
  blockedEvents: number;
  riskScore: number;
  criticalAlerts: number;
}

export interface SecurityMetrics {
  totalThreats: number;
  blockedAttacks: number;
  suspiciousActivity: number;
  riskLevel: string;
}

class DLPService {
  private isAuthenticated = false;
  private authToken: string | null = null;

  async authenticateIfNeeded(): Promise<boolean> {
    if (this.isAuthenticated && apexOneService.getAuthenticationStatus()) {
      return true;
    }

    if (isWindowsServerConfigured()) {
      try {
        console.log('Attempting OfficeScan authentication...');
        const authResult = await apexOneService.authenticate(
          windowsServerConfig.serverUrl,
          windowsServerConfig.username,
          windowsServerConfig.password
        );

        if (authResult.success) {
          this.isAuthenticated = true;
          this.authToken = authResult.token || null;
          console.log('OfficeScan authentication successful');
          return true;
        } else {
          console.error('OfficeScan authentication failed:', authResult.message);
          return false;
        }
      } catch (error) {
        console.error('Authentication error:', error);
        return false;
      }
    }

    return false;
  }

  async getRealTimeLogs(): Promise<DLPLogEntry[]> {
    try {
      console.log('Fetching real-time logs...');
      
      // Try to authenticate first
      const authenticated = await this.authenticateIfNeeded();
      
      if (authenticated && isWindowsServerConfigured()) {
        console.log('Fetching logs from OfficeScan...');
        
        const securityLogs = await apexOneService.fetchSecurityLogs(
          windowsServerConfig.serverUrl,
          this.authToken || '',
          { limit: 50 }
        );

        const dlpLogs = securityLogs.map(this.transformSecurityLogToDLP);
        console.log('Transformed OfficeScan logs:', dlpLogs.length);
        return dlpLogs;
      } else {
        console.log('Not authenticated or server not configured, using mock data');
        return this.generateMockLogs();
      }
    } catch (error) {
      console.error('Error fetching real-time logs:', error);
      return this.generateMockLogs();
    }
  }

  async getHistoricalLogs(limit: number = 100): Promise<DLPLogEntry[]> {
    try {
      console.log('Fetching historical logs...');
      
      const authenticated = await this.authenticateIfNeeded();
      
      if (authenticated && isWindowsServerConfigured()) {
        const securityLogs = await apexOneService.fetchSecurityLogs(
          windowsServerConfig.serverUrl,
          this.authToken || '',
          { 
            limit,
            startTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            endTime: new Date().toISOString()
          }
        );

        return securityLogs.map(this.transformSecurityLogToDLP);
      } else {
        return this.generateMockLogs(limit);
      }
    } catch (error) {
      console.error('Error fetching historical logs:', error);
      return this.generateMockLogs(limit);
    }
  }

  private transformSecurityLogToDLP(securityLog: any): DLPLogEntry {
    return {
      id: securityLog.id,
      timestamp: new Date(securityLog.timestamp),
      severity: this.mapSeverity(securityLog.severity),
      type: securityLog.eventType || 'DLP Event',
      message: securityLog.description || 'Data loss prevention event detected',
      user: securityLog.user || 'Unknown',
      source: securityLog.source || 'Unknown',
      policy: this.extractPolicy(securityLog.eventType),
      action: securityLog.action || 'Logged',
      riskScore: this.calculateRiskScore(securityLog.severity, securityLog.action)
    };
  }

  private mapSeverity(severity: string): 'low' | 'medium' | 'high' | 'critical' {
    const normalizedSeverity = severity.toLowerCase();
    switch (normalizedSeverity) {
      case 'critical':
      case 'very high':
        return 'critical';
      case 'high':
        return 'high';
      case 'medium':
      case 'moderate':
        return 'medium';
      case 'low':
      case 'info':
      case 'information':
        return 'low';
      default:
        return 'medium';
    }
  }

  private extractPolicy(eventType: string): string {
    if (eventType.includes('Email')) return 'Email DLP Policy';
    if (eventType.includes('USB') || eventType.includes('Device')) return 'Device Control Policy';
    if (eventType.includes('Transfer') || eventType.includes('Upload')) return 'Data Transfer Policy';
    if (eventType.includes('DLP')) return 'General DLP Policy';
    return 'Security Policy';
  }

  private calculateRiskScore(severity: string, action: string): number {
    let score = 5; // Base score
    
    switch (severity.toLowerCase()) {
      case 'critical':
        score = 9;
        break;
      case 'high':
        score = 7;
        break;
      case 'medium':
        score = 5;
        break;
      case 'low':
        score = 3;
        break;
    }

    if (action === 'Blocked') score += 1;
    if (action === 'Quarantined') score += 2;
    
    return Math.min(score, 10);
  }

  private generateMockLogs(count: number = 10): DLPLogEntry[] {
    const mockLogs: DLPLogEntry[] = [];
    const types = ['Email DLP Violation', 'USB Device Blocked', 'File Transfer Restricted', 'Data Leak Detected'];
    const severities: Array<'low' | 'medium' | 'high' | 'critical'> = ['low', 'medium', 'high', 'critical'];
    const users = ['vikash', 'admin', 'user1', 'system'];
    const sources = ['workstation-01', 'laptop-05', 'server-03', 'mobile-device'];
    const policies = ['Email DLP Policy', 'Device Control Policy', 'Data Transfer Policy', 'General DLP Policy'];
    const actions = ['Blocked', 'Quarantined', 'Allowed', 'Logged'];

    for (let i = 0; i < count; i++) {
      const severity = severities[Math.floor(Math.random() * severities.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      
      mockLogs.push({
        id: `mock-${Date.now()}-${i}`,
        timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
        severity,
        type: types[Math.floor(Math.random() * types.length)],
        message: `Mock DLP event: ${types[Math.floor(Math.random() * types.length)]} detected`,
        user: users[Math.floor(Math.random() * users.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        policy: policies[Math.floor(Math.random() * policies.length)],
        action,
        riskScore: this.calculateRiskScore(severity, action)
      });
    }

    return mockLogs;
  }

  async getDLPStats(): Promise<DLPStats> {
    try {
      const logs = await this.getRealTimeLogs();
      const criticalLogs = logs.filter(log => log.severity === 'critical');
      const blockedEvents = logs.filter(log => log.action === 'Blocked');
      
      return {
        activePolicies: 24,
        blockedEvents: blockedEvents.length,
        riskScore: logs.length > 0 ? logs.reduce((sum, log) => sum + log.riskScore, 0) / logs.length : 5.5,
        criticalAlerts: criticalLogs.length
      };
    } catch (error) {
      console.error('Error getting DLP stats:', error);
      return {
        activePolicies: 24,
        blockedEvents: 156,
        riskScore: 7.2,
        criticalAlerts: 3
      };
    }
  }

  async getSecurityMetrics(): Promise<SecurityMetrics> {
    try {
      const logs = await this.getRealTimeLogs();
      const threats = logs.filter(log => log.severity === 'high' || log.severity === 'critical');
      const blocked = logs.filter(log => log.action === 'Blocked');
      
      return {
        totalThreats: threats.length,
        blockedAttacks: blocked.length,
        suspiciousActivity: logs.filter(log => log.riskScore > 7).length,
        riskLevel: threats.length > 5 ? 'High' : threats.length > 2 ? 'Medium' : 'Low'
      };
    } catch (error) {
      console.error('Error getting security metrics:', error);
      return {
        totalThreats: 42,
        blockedAttacks: 28,
        suspiciousActivity: 15,
        riskLevel: 'Medium'
      };
    }
  }

  getAuthenticationStatus(): boolean {
    return this.isAuthenticated && apexOneService.getAuthenticationStatus();
  }

  async testWindowsServerConnection(): Promise<boolean> {
    return await this.authenticateIfNeeded();
  }

  getWindowsServerStatus(): { connected: boolean; server?: string; lastSync?: Date } {
    return {
      connected: this.getAuthenticationStatus(),
      server: isWindowsServerConfigured() ? windowsServerConfig.serverUrl : undefined,
      lastSync: this.isAuthenticated ? new Date() : undefined
    };
  }
}

export const dlpService = new DLPService();
