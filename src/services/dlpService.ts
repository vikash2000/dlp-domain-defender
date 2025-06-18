import axios from 'axios';
import WindowsServerService from './windowsServerService';
import { isWindowsServerConfigured } from '@/config/windowsServer';

// Server configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true' || !import.meta.env.VITE_API_BASE_URL;

// Authentication configuration
const API_USERNAME = import.meta.env.VITE_API_USERNAME || '';
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD || '';
const API_TOKEN = import.meta.env.VITE_API_TOKEN || '';
const USE_API_AUTH = import.meta.env.VITE_USE_API_AUTH === 'true';

// Windows Server Service
const windowsServerService = isWindowsServerConfigured() ? new WindowsServerService() : null;

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
    if (USE_MOCK_DATA) {
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

    try {
      const response = await axios.get(`${API_BASE_URL}/dlp/stats`, {
        headers: this.getAuthHeaders()
      });
      return response.data as DLPStats;
    } catch (error) {
      console.error('Failed to fetch DLP stats:', error);
      // Return empty/zero stats instead of mock data
      return {
        activePolicies: 0,
        blockedEvents: 0,
        riskScore: 0,
        logVolume: '0K',
        criticalAlerts: 0
      };
    }
  }

  async getSecurityMetrics(): Promise<SecurityMetrics> {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return {
        totalIncidents: 342 + Math.floor(Math.random() * 100),
        resolvedIncidents: 298 + Math.floor(Math.random() * 50),
        activeThreats: 12 + Math.floor(Math.random() * 8),
        complianceScore: 85 + Math.floor(Math.random() * 10)
      };
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/security/metrics`, {
        headers: this.getAuthHeaders()
      });
      return response.data as SecurityMetrics;
    } catch (error) {
      console.error('Failed to fetch security metrics:', error);
      // Return empty/zero metrics instead of mock data
      return {
        totalIncidents: 0,
        resolvedIncidents: 0,
        activeThreats: 0,
        complianceScore: 0
      };
    }
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

  async getRealTimeLogs(): Promise<DLPLogEntry[]> {
    // Priority 1: Windows Server (if configured)
    if (windowsServerService) {
      try {
        const logs = await windowsServerService.getRecentLogs(5); // Last 5 minutes
        if (logs && logs.length > 0) {
          return logs;
        }
      } catch (error) {
        console.error('Windows Server real-time logs failed:', error);
      }
    }

    // Priority 2: Mock data (if enabled)
    if (USE_MOCK_DATA) {
      return [];
    }

    // Priority 3: API server
    try {
      const response = await axios.get(`${API_BASE_URL}/dlp/logs/realtime`, {
        headers: this.getAuthHeaders()
      });
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('API real-time logs failed:', error);
      return [];
    }
  }

  async getHistoricalLogs(limit: number = 100): Promise<DLPLogEntry[]> {
    // Priority 1: Windows Server (if configured)
    if (windowsServerService) {
      try {
        // Get logs from last 24 hours
        const endDate = new Date().toISOString();
        const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const logs = await windowsServerService.getLogsByDateRange(startDate, endDate);
        if (logs && logs.length > 0) {
          return logs.slice(0, limit);
        }
      } catch (error) {
        console.error('Windows Server historical logs failed:', error);
      }
    }

    // Priority 2: Mock data (if enabled)
    if (USE_MOCK_DATA) {
      return [];
    }

    // Priority 3: API server
    try {
      const response = await axios.get(`${API_BASE_URL}/dlp/logs/historical`, {
        headers: this.getAuthHeaders(),
        params: { limit }
      });
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('API historical logs failed:', error);
      return [];
    }
  }

  private getAuthHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };

    if (USE_API_AUTH) {
      if (API_TOKEN) {
        // Use Bearer token authentication
        headers['Authorization'] = `Bearer ${API_TOKEN}`;
      } else if (API_USERNAME && API_PASSWORD) {
        // Use Basic authentication
        const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`);
        headers['Authorization'] = `Basic ${credentials}`;
      }
    }

    return headers;
  }

  /**
   * Test Windows server connection
   */
  async testWindowsServerConnection(): Promise<boolean> {
    if (!windowsServerService) {
      console.log('Windows server not configured');
      return false;
    }

    try {
      const isConnected = await windowsServerService.testConnection();
      console.log('Windows server connection test:', isConnected ? 'SUCCESS' : 'FAILED');
      return isConnected;
    } catch (error) {
      console.error('Windows server connection test failed:', error);
      return false;
    }
  }

  /**
   * Get Windows server status
   */
  getWindowsServerStatus() {
    return {
      configured: !!windowsServerService,
      service: windowsServerService ? 'Available' : 'Not configured'
    };
  }
}

export const dlpService = new DLPService();
