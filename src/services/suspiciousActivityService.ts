import { whitelistService } from './whitelistService';
import { dlpService } from './dlpService';

export interface SuspiciousActivity {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  source: string;
  destination: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  reason: string;
  details?: string;
  isWhitelisted?: boolean;
}

export const suspiciousActivityService = {
  // Analyze logs for suspicious activity
  async analyzeLogs(logs: any[]): Promise<SuspiciousActivity[]> {
    const suspiciousActivities: SuspiciousActivity[] = [];
    
    // First check domains against whitelist
    const domainsChecked = await this.analyzeDomainsAgainstWhitelist(logs);
    
    for (const log of domainsChecked) {
      let isSuspicious = false;
      let reason = '';
      let severity: 'Low' | 'Medium' | 'High' | 'Critical' = 'Low';
      
      // Check if already flagged as suspicious from whitelist check
      if (log.suspiciousReason) {
        isSuspicious = true;
        reason = log.suspiciousReason;
        severity = 'Medium';
      }
      
      // Check for sensitive data patterns
      const sensitiveDataCheck = this.checkForSensitiveData(log.description || '');
      if (sensitiveDataCheck.found) {
        isSuspicious = true;
        reason = reason ? `${reason}, ${sensitiveDataCheck.reason}` : sensitiveDataCheck.reason;
        severity = 'High';
      }
      
      // Check for unusual activity patterns
      const unusualActivityCheck = this.checkForUnusualActivity(log);
      if (unusualActivityCheck.isUnusual) {
        isSuspicious = true;
        reason = reason ? `${reason}, ${unusualActivityCheck.reason}` : unusualActivityCheck.reason;
        severity = unusualActivityCheck.severity;
      }
      
      // Add to suspicious activities if flagged
      if (isSuspicious) {
        suspiciousActivities.push({
          id: log.id || `sa-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          timestamp: log.timestamp || new Date().toISOString(),
          user: log.user || 'unknown',
          action: log.action || 'unknown',
          source: log.source || 'unknown',
          destination: log.destination || 'unknown',
          severity,
          reason,
          details: JSON.stringify(log),
          isWhitelisted: log.isWhitelisted
        });
      }
    }
    
    return suspiciousActivities;
  },

  async analyzeDomainsAgainstWhitelist(logs: any[]): Promise<any[]> {
    try {
      const results = [];
      
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
  
  // Extract domain from URL or email
  extractDomain(input: string): string {
    try {
      // Handle email addresses
      if (input.includes('@')) {
        return input.split('@')[1].toLowerCase();
      }
      
      // Handle URLs
      if (input.includes('://')) {
        const url = new URL(input);
        return url.hostname.toLowerCase();
      }
      
      // Handle plain domains
      if (input.includes('.')) {
        // Remove path if any
        const domainPart = input.split('/')[0];
        return domainPart.toLowerCase();
      }
      
      return input.toLowerCase();
    } catch (error) {
      console.error('Error extracting domain:', error);
      return input.toLowerCase();
    }
  },
  
  // Check for sensitive data patterns in text
  checkForSensitiveData(text: string): { found: boolean; reason: string } {
    const patterns = {
      creditCard: /\b(?:\d{4}[-\s]?){3}\d{4}\b/,
      ssn: /\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/,
      password: /\b(?:password|pwd|pass)\s*[:=]\s*\S+/i,
      apiKey: /\b(?:api[_-]?key|token|secret|auth)[_-]?(?:key)?\s*[:=]\s*\S+/i,
      email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
    };
    
    for (const [key, pattern] of Object.entries(patterns)) {
      if (pattern.test(text)) {
        return { 
          found: true, 
          reason: `Potential ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} detected` 
        };
      }
    }
    
    return { found: false, reason: '' };
  },
  
  // Check for unusual activity patterns
  checkForUnusualActivity(log: any): { isUnusual: boolean; reason: string; severity: 'Low' | 'Medium' | 'High' | 'Critical' } {
    // Default result
    const result = { isUnusual: false, reason: '', severity: 'Low' as const };
    
    // Check for unusual time (outside business hours)
    if (log.timestamp) {
      const date = new Date(log.timestamp);
      const hour = date.getHours();
      const day = date.getDay(); // 0 = Sunday, 6 = Saturday
      
      if (day === 0 || day === 6) {
        result.isUnusual = true;
        result.reason = 'Activity during weekend';
        result.severity = 'Medium';
      } else if (hour < 6 || hour > 20) {
        result.isUnusual = true;
        result.reason = 'Activity outside business hours';
        result.severity = 'Medium';
      }
    }
    
    // Check for high volume of activity
    if (log.count && log.count > 100) {
      result.isUnusual = true;
      result.reason = result.reason ? `${result.reason}, High volume of activity` : 'High volume of activity';
      result.severity = 'High';
    }
    
    // Check for known suspicious actions
    const suspiciousActions = ['delete', 'remove', 'download', 'export', 'extract'];
    if (log.action && suspiciousActions.some(action => log.action.toLowerCase().includes(action))) {
      result.isUnusual = true;
      result.reason = result.reason ? `${result.reason}, Suspicious action detected` : 'Suspicious action detected';
      result.severity = 'High';
    }
    
    // Check for known suspicious destinations
    const suspiciousDomains = ['pastebin.com', 'transfer.sh', 'mega.nz', 'anonfiles.com'];
    if (log.destination && suspiciousDomains.some(domain => log.destination.toLowerCase().includes(domain))) {
      result.isUnusual = true;
      result.reason = result.reason ? `${result.reason}, Known suspicious destination` : 'Known suspicious destination';
      result.severity = 'Critical';
    }
    
    return result;
  },
  
  // Get recent suspicious activities
  async getRecentSuspiciousActivities(): Promise<SuspiciousActivity[]> {
    try {
      // Get recent logs from DLP service
      const logs = await dlpService.getRecentLogs();
      
      // Analyze logs for suspicious activity
      return await this.analyzeLogs(logs);
    } catch (error) {
      console.error('Error getting recent suspicious activities:', error);
      return [];
    }
  }
};
