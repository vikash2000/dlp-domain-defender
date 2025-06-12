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
  endpoint?: string;
  domain?: string;
  ipAddress?: string;
  ruleName?: string;
  template?: string;
  destination?: string;
  process?: string;
  channelName?: string;
  fileClass?: string;
  violationId?: string;
  dataSize?: string;
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
    'Payroll Data Transfer',
    'Financial Document Sharing',
    'Email Attachment Screening',
    'Industrial Training Records',
    'Salary Statement Detection',
    'Excel Spreadsheet Analysis',
    'Binary File Classification',
    'Cross-Department Data Transfer',
    'External Email Monitoring',
    'Credit Card Detection',
    'SSN Pattern Match',
    'Healthcare PHI',
    'Personal Data (GDPR)',
    'Authentication Data'
  ];

  private readonly users = [
    'hrdcommon',
    'finance.dept',
    'payroll.admin',
    'john.doe@company.com',
    'sarah.wilson@company.com',
    'mike.chen@company.com',
    'emily.brown@company.com',
    'david.martinez@company.com'
  ];

  private readonly endpoints = [
    'CO-D-361',
    'FIN-W-128',
    'HR-L-456',
    'MFG-D-789',
    'IT-S-234',
    'EXEC-W-567'
  ];

  private readonly domains = [
    'Corporate\\Desktop\\Dlp&dc block\\',
    'Finance\\Workstation\\Security\\',
    'HR\\Department\\Restricted\\',
    'Manufacturing\\Plant\\Secure\\',
    'IT\\Server\\Protected\\'
  ];

  private readonly sources = [
    'Mysore-Industrial Trainees-Stipend-0525.xlsx',
    'Financial-Report-Q2-2025.pdf',
    'Employee-Salary-Data.xlsx',
    'Manufacturing-Process-Guide.docx',
    'Customer-Database-Export.csv',
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
    'Data_Transfer',
    'Email_Security',
    'Financial_Protection',
    'PCI-DSS Compliance',
    'GDPR Protection',
    'HIPAA Privacy',
    'SOX Controls',
    'ISO 27001',
    'Industrial_Data_Security'
  ];

  private readonly actions = [
    'Logged',
    'Blocked',
    'Quarantined',
    'Encrypted',
    'Monitored',
    'Redirected',
    'Alert Generated'
  ];

  private readonly processes = [
    'C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE',
    'C:\\Windows\\System32\\explorer.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Adobe\\Acrobat DC\\Acrobat\\Acrobat.exe',
    'C:\\Windows\\System32\\notepad.exe'
  ];

  private readonly channels = [
    'Exchange Client Email',
    'Web Browser Upload',
    'File Transfer Protocol',
    'Network Share Access',
    'USB Device Transfer',
    'Cloud Storage Sync'
  ];

  generateMockLogs(count: number): DLPLogEntry[] {
    const logs: DLPLogEntry[] = [];
    
    for (let i = 0; i < count; i++) {
      const severity = this.getRandomSeverity();
      const type = this.getRandomItem(this.threatTypes);
      const isDetailedLog = Math.random() > 0.3; // 70% chance for detailed logs
      
      const log: DLPLogEntry = {
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
      };

      if (isDetailedLog) {
        log.endpoint = this.getRandomItem(this.endpoints);
        log.domain = this.getRandomItem(this.domains);
        log.ipAddress = this.generateRandomIP();
        log.ruleName = log.policy;
        log.template = 'All File Extension';
        log.destination = this.generateEmailDestination();
        log.process = this.getRandomItem(this.processes);
        log.channelName = this.getRandomItem(this.channels);
        log.fileClass = Math.random() > 0.5 ? 'binary' : 'text';
        log.violationId = `${Math.random().toString(36).substring(2, 15).toUpperCase()}`;
        log.dataSize = this.generateDataSize();
      }
      
      logs.push(log);
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

  private generateRandomIP(): string {
    return `10.10.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  }

  private generateEmailDestination(): string {
    const domains = ['@pricolprecision.com', '@company.com', '@external.com'];
    const users = ['vadivel.kas', 'senthilkuma', 'jayaramu', 'ns.saravanan', 'thippeswamy'];
    const selectedUsers = users.slice(0, Math.floor(Math.random() * 3) + 1);
    return selectedUsers.map(user => user + this.getRandomItem(domains)).join(', ');
  }

  private generateDataSize(): string {
    const sizes = ['34151', '45632', '78912', '123456', '67890', '98765'];
    return this.getRandomItem(sizes);
  }

  private generateMessage(type: string, severity: string): string {
    const messages: Record<string, string[]> = {
      'Payroll Data Transfer': [
        'Salary statement spreadsheet detected in email transfer',
        'Payroll data shared with multiple external recipients',
        'Industrial trainee stipend information accessed'
      ],
      'Financial Document Sharing': [
        'Financial document transferred to external domain',
        'Excel spreadsheet with salary data detected',
        'Sensitive financial records in email attachment'
      ],
      'Email Attachment Screening': [
        'Binary file attachment flagged for review',
        'Large file transfer via Exchange client detected',
        'Multiple recipients for sensitive document'
      ],
      'Industrial Training Records': [
        'Training stipend records accessed by unauthorized user',
        'Industrial plant data transferred externally',
        'Manufacturing training documents shared'
      ],
      'Credit Card Detection': [
        'Credit card numbers detected in email attachment',
        'PAN data identified in file transfer',
        'Potential payment card data in document'
      ],
      'SSN Pattern Match': [
        'Social Security Number pattern detected',
        'SSN format found in spreadsheet',
        'Personal identifier exposed in communication'
      ]
    };

    const typeMessages = messages[type] || ['Sensitive data detected in transfer'];
    return this.getRandomItem(typeMessages);
  }
}

export const dlpService = new DLPService();
