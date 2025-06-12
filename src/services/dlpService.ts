
export interface DLPLogEntry {
  id: string;
  timestamp: Date;
  severity: 'critical' | 'high' | 'medium' | 'low';
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
  logVolume: string;
  criticalAlerts: number;
}

export interface SecurityMetrics {
  totalIncidents: number;
  resolvedIncidents: number;
  activeThreats: number;
  complianceScore: number;
}

class DLPService {
  private readonly threatTypes = [
    'Credit Card Detection',
    'SSN Pattern Match',
    'Email Data Exposure',
    'Healthcare PHI',
    'Financial Records',
    'Intellectual Property',
    'Personal Data (GDPR)',
    'Authentication Data'
  ];

  private readonly users = [
    'john.doe@company.com',
    'sarah.wilson@company.com',
    'mike.chen@company.com',
    'emily.brown@company.com',
    'david.martinez@company.com'
  ];

  private readonly sources = [
    'Email Gateway',
    'File Server',
    'Cloud Storage',
    'Database Export',
    'Web Application',
    'USB Device',
    'Network Share',
    'Mobile Device'
  ];

  private readonly policies = [
    'PCI-DSS Compliance',
    'GDPR Protection',
    'HIPAA Privacy',
    'SOX Controls',
    'ISO 27001',
    'Company IP Policy'
  ];

  private readonly actions = [
    'Blocked',
    'Quarantined',
    'Encrypted',
    'Monitored',
    'Redirected',
    'Logged Only'
  ];

  generateMockLogs(count: number): DLPLogEntry[] {
    const logs: DLPLogEntry[] = [];
    
    for (let i = 0; i < count; i++) {
      const severity = this.getRandomSeverity();
      const type = this.getRandomItem(this.threatTypes);
      
      logs.push({
        id: `log-${Date.now()}-${i}`,
        timestamp: new Date(),
        severity,
        type,
        message: this.generateMessage(type, severity),
        user: this.getRandomItem(this.users),
        source: this.getRandomItem(this.sources),
        policy: this.getRandomItem(this.policies),
        action: this.getRandomItem(this.actions),
        riskScore: this.getRiskScore(severity)
      });
    }
    
    return logs;
  }

  async getDLPStats(): Promise<DLPStats> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return {
      activePolicies: 24 + Math.floor(Math.random() * 10),
      blockedEvents: 156 + Math.floor(Math.random() * 50),
      riskScore: Number((6.5 + Math.random() * 2).toFixed(1)),
      logVolume: `${(2.1 + Math.random() * 0.8).toFixed(1)}K`,
      criticalAlerts: Math.floor(Math.random() * 5)
    };
  }

  async getSecurityMetrics(): Promise<SecurityMetrics> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      totalIncidents: 342 + Math.floor(Math.random() * 100),
      resolvedIncidents: 298 + Math.floor(Math.random() * 50),
      activeThreats: 12 + Math.floor(Math.random() * 8),
      complianceScore: 85 + Math.floor(Math.random() * 10)
    };
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private getRandomSeverity(): 'critical' | 'high' | 'medium' | 'low' {
    const rand = Math.random();
    if (rand < 0.1) return 'critical';
    if (rand < 0.3) return 'high';
    if (rand < 0.7) return 'medium';
    return 'low';
  }

  private getRiskScore(severity: string): number {
    switch (severity) {
      case 'critical': return 8 + Math.floor(Math.random() * 3);
      case 'high': return 6 + Math.floor(Math.random() * 3);
      case 'medium': return 3 + Math.floor(Math.random() * 4);
      case 'low': return 1 + Math.floor(Math.random() * 3);
      default: return 5;
    }
  }

  private generateMessage(type: string, severity: string): string {
    const messages: Record<string, string[]> = {
      'Credit Card Detection': [
        'Credit card numbers detected in email attachment',
        'PAN data identified in file transfer',
        'Potential payment card data in document'
      ],
      'SSN Pattern Match': [
        'Social Security Number pattern detected',
        'SSN format found in spreadsheet',
        'Personal identifier exposed in communication'
      ],
      'Email Data Exposure': [
        'Sensitive email data detected in external transfer',
        'Email content flagged for privacy violation',
        'Unauthorized email forwarding detected'
      ],
      'Healthcare PHI': [
        'Protected Health Information detected',
        'Medical record data in unauthorized location',
        'HIPAA violation potential identified'
      ]
    };

    const typeMessages = messages[type] || ['Sensitive data detected'];
    return this.getRandomItem(typeMessages);
  }
}

export const dlpService = new DLPService();
