import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { createLogger, format, transports } from 'winston';

const prisma = new PrismaClient();

// Configure logger
const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

interface ApexOneConfig {
  serverUrl: string;
  apiKey: string;
  username: string;
  password: string;
}

class ApexOneService {
  private config: ApexOneConfig;
  private token: string | null = null;

  constructor(config: ApexOneConfig) {
    this.config = config;
  }

  private async authenticate() {
    try {
      const response = await axios.post(`${this.config.serverUrl}/api/auth`, {
        username: this.config.username,
        password: this.config.password,
        apiKey: this.config.apiKey
      });
      this.token = response.data.token;
      return this.token;
    } catch (error) {
      logger.error('Authentication failed:', error);
      throw new Error('Failed to authenticate with Apex One');
    }
  }

  private async getHeaders() {
    if (!this.token) {
      await this.authenticate();
    }
    return {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
  }

  async fetchRecentLogs(minutes: number = 5) {
    try {
      const headers = await this.getHeaders();
      const response = await axios.get(
        `${this.config.serverUrl}/api/logs/recent`,
        {
          headers,
          params: {
            minutes,
            type: 'DLP' // Filter for DLP logs
          }
        }
      );

      // Process and store logs
      for (const log of response.data.logs) {
        await this.processLog(log);
      }

      return response.data.logs;
    } catch (error) {
      logger.error('Failed to fetch logs:', error);
      throw new Error('Failed to fetch logs from Apex One');
    }
  }

  private async processLog(log: any) {
    try {
      // Check if domain exists in whitelist
      const domain = log.domain ? await prisma.whitelistedDomain.findFirst({
        where: { domain: log.domain }
      }) : null;

      // Create log entry
      await prisma.apexOneLog.create({
        data: {
          eventType: log.eventType,
          severity: log.severity,
          sourceIP: log.sourceIP,
          destinationIP: log.destinationIP,
          domainName: log.domain,
          filePath: log.filePath,
          fileName: log.fileName,
          fileHash: log.fileHash,
          action: log.action,
          details: JSON.stringify(log.details),
          status: 'PENDING',
          domainId: domain?.id,
          timestamp: new Date(log.timestamp)
        }
      });

      // Update domain reputation if needed
      if (domain && log.eventType === 'DETECTION') {
        await this.updateDomainReputation(domain.id, log);
      }
    } catch (error) {
      logger.error('Failed to process log:', error);
    }
  }

  private async updateDomainReputation(domainId: number, log: any) {
    try {
      const reputation = await prisma.domainReputation.findUnique({
        where: { domainId }
      });

      if (reputation) {
        // Update existing reputation
        await prisma.domainReputation.update({
          where: { domainId },
          data: {
            score: reputation.score - 10, // Decrease score for detection
            threats: JSON.stringify([...JSON.parse(reputation.threats), log]),
            lastChecked: new Date(),
            updatedAt: new Date()
          }
        });
      } else {
        // Create new reputation
        await prisma.domainReputation.create({
          data: {
            domainId,
            score: 70, // Start with a lower score
            threats: JSON.stringify([log]),
            lastChecked: new Date()
          }
        });
      }
    } catch (error) {
      logger.error('Failed to update domain reputation:', error);
    }
  }

  // Start real-time monitoring
  async startMonitoring(intervalMinutes: number = 5) {
    logger.info('Starting Apex One log monitoring');
    
    // Initial fetch
    await this.fetchRecentLogs(intervalMinutes);

    // Set up interval
    setInterval(async () => {
      try {
        await this.fetchRecentLogs(intervalMinutes);
      } catch (error) {
        logger.error('Error in monitoring interval:', error);
      }
    }, intervalMinutes * 60 * 1000);
  }
}

export default ApexOneService; 