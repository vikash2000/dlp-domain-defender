
import { whitelistService } from './whitelistService';

export interface SuspiciousActivity {
  id: string;
  timestamp: string;
  type: 'data_exfiltration' | 'malware' | 'unauthorized_access' | 'policy_violation' | 'unusual_behavior';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  source: string;
  destination?: string;
  user: string;
  riskScore: number;
  indicators: string[];
  isWhitelisted?: boolean;
  extractedDomain?: string;
}

export interface ActivityPattern {
  pattern: string;
  occurrences: number;
  lastSeen: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  affectedUsers: string[];
}

export interface ThreatIntelligence {
  iocType: string;
  value: string;
  threatLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  source: string;
  lastUpdated: string;
  description: string;
}

export interface SuspiciousActivityFilters {
  startTime?: string;
  endTime?: string;
  type?: string;
  severity?: 'Low' | 'Medium' | 'High' | 'Critical';
  user?: string;
  source?: string;
  minRiskScore?: number;
  maxRiskScore?: number;
}

const generateMockActivities = (): SuspiciousActivity[] => {
  return [
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      type: 'data_exfiltration',
      severity: 'High',
      description: 'Large file upload to external cloud storage detected',
      source: '192.168.1.100',
      destination: 'dropbox.com',
      user: 'john.doe@company.com',
      riskScore: 85,
      indicators: ['large_file_transfer', 'external_destination', 'after_hours']
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      type: 'unauthorized_access',
      severity: 'Medium',
      description: 'Multiple failed login attempts detected',
      source: '203.0.113.45',
      user: 'admin@company.com',
      riskScore: 65,
      indicators: ['brute_force', 'external_ip', 'admin_account']
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
      type: 'malware',
      severity: 'Critical',
      description: 'Suspicious executable detected in email attachment',
      source: '192.168.1.105',
      user: 'jane.smith@company.com',
      riskScore: 95,
      indicators: ['malicious_file', 'email_attachment', 'known_threat']
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
      type: 'policy_violation',
      severity: 'Medium',
      description: 'Unauthorized software installation attempt',
      source: '192.168.1.110',
      user: 'mike.wilson@company.com',
      riskScore: 55,
      indicators: ['software_installation', 'policy_violation', 'unapproved_software']
    },
    {
      id: '5',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
      type: 'unusual_behavior',
      severity: 'Low',
      description: 'User accessing files outside normal working hours',
      source: '192.168.1.120',
      user: 'sarah.jones@company.com',
      riskScore: 35,
      indicators: ['after_hours_access', 'file_access', 'unusual_pattern']
    }
  ];
};

export const suspiciousActivityService = {
  async getSuspiciousActivities(filters?: SuspiciousActivityFilters): Promise<SuspiciousActivity[]> {
    try {
      let activities = generateMockActivities();

      if (filters) {
        activities = activities.filter(activity => {
          if (filters.type && activity.type !== filters.type) return false;
          if (filters.severity && activity.severity !== filters.severity) return false;
          if (filters.user && !activity.user.includes(filters.user)) return false;
          if (filters.source && !activity.source.includes(filters.source)) return false;
          if (filters.minRiskScore && activity.riskScore < filters.minRiskScore) return false;
          if (filters.maxRiskScore && activity.riskScore > filters.maxRiskScore) return false;
          
          if (filters.startTime) {
            const startTime = new Date(filters.startTime);
            const activityTime = new Date(activity.timestamp);
            if (activityTime < startTime) return false;
          }
          
          if (filters.endTime) {
            const endTime = new Date(filters.endTime);
            const activityTime = new Date(activity.timestamp);
            if (activityTime > endTime) return false;
          }
          
          return true;
        });
      }

      // Check whitelist for activities with destinations
      for (const activity of activities) {
        if (activity.destination) {
          try {
            const domain = this.extractDomain(activity.destination);
            const isWhitelisted = await whitelistService.isDomainWhitelisted(domain);
            activity.extractedDomain = domain;
            activity.isWhitelisted = isWhitelisted;
          } catch (error) {
            console.error('Error checking whitelist for activity:', error);
          }
        }
      }

      return activities;
    } catch (error) {
      console.error('Error fetching suspicious activities:', error);
      return [];
    }
  },

  async getActivityPatterns(): Promise<ActivityPattern[]> {
    return [
      {
        pattern: 'Multiple failed login attempts',
        occurrences: 15,
        lastSeen: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        riskLevel: 'High',
        affectedUsers: ['admin@company.com', 'user1@company.com']
      },
      {
        pattern: 'Large file downloads after hours',
        occurrences: 8,
        lastSeen: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        riskLevel: 'Medium',
        affectedUsers: ['john.doe@company.com', 'jane.smith@company.com']
      },
      {
        pattern: 'Unusual network traffic patterns',
        occurrences: 23,
        lastSeen: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
        riskLevel: 'Low',
        affectedUsers: ['network_device_1', 'network_device_2']
      }
    ];
  },

  async getThreatIntelligence(): Promise<ThreatIntelligence[]> {
    return [
      {
        iocType: 'IP Address',
        value: '203.0.113.45',
        threatLevel: 'High',
        source: 'Threat Intelligence Feed',
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
        description: 'Known botnet command and control server'
      },
      {
        iocType: 'Domain',
        value: 'malicious-site.com',
        threatLevel: 'Critical',
        source: 'Internal Analysis',
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        description: 'Confirmed malware distribution site'
      },
      {
        iocType: 'File Hash',
        value: 'a1b2c3d4e5f6...',
        threatLevel: 'Medium',
        source: 'Vendor Feed',
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        description: 'Potentially unwanted program'
      }
    ];
  },

  async analyzeRiskScore(activity: SuspiciousActivity): Promise<number> {
    let riskScore = activity.riskScore;

    // Increase risk for critical indicators
    if (activity.indicators.includes('known_threat')) riskScore += 20;
    if (activity.indicators.includes('admin_account')) riskScore += 15;
    if (activity.indicators.includes('external_ip')) riskScore += 10;
    if (activity.indicators.includes('after_hours')) riskScore += 5;

    // Decrease risk if domain is whitelisted
    if (activity.isWhitelisted) {
      riskScore = Math.max(0, riskScore - 30);
    }

    return Math.min(100, riskScore);
  },

  extractDomain(url: string): string {
    try {
      // Handle URLs that might not have protocol
      const urlWithProtocol = url.startsWith('http') ? url : `https://${url}`;
      const urlObj = new URL(urlWithProtocol);
      return urlObj.hostname;
    } catch (error) {
      // If URL parsing fails, try to extract domain using regex
      const domainMatch = url.match(/(?:https?:\/\/)?(?:www\.)?([^\/\s]+)/);
      return domainMatch ? domainMatch[1] : url;
    }
  }
};
