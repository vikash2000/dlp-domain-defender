import { PrismaClient } from '@prisma/client';
import { DomainUtils } from '@/lib/domainUtils';

// Initialize Prisma Client
const prisma = new PrismaClient();

export type DomainWithAudit = {
  id: number;
  domain: string;
  category: string;
  isWildcard: boolean;
  notes?: string;
  addedBy?: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  riskLevel: string;
  dataClass: string;
  auditLogs: Array<{
    id: number;
    action: string;
    domainName: string;
    performedBy?: string;
    details?: string;
    createdAt: Date;
  }>;
};

export class DatabaseService {
  private static instance: DatabaseService;
  private prisma: PrismaClient;
  private isInitialized: boolean = false;
  private connectionStatus: 'connecting' | 'connected' | 'error' | 'disconnected' = 'disconnected';

  private constructor() {
    this.prisma = prisma;
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  /**
   * Initialize database connection and verify connectivity
   */
  async initialize(): Promise<boolean> {
    if (this.isInitialized) {
      return true;
    }

    try {
      console.log('🔌 Initializing database connection...');
      this.connectionStatus = 'connecting';

      // Test database connection
      await this.prisma.$connect();
      
      // Verify connection with a simple query
      await this.prisma.$queryRaw`SELECT 1 as test`;
      
      this.connectionStatus = 'connected';
      this.isInitialized = true;
      
      console.log('✅ Database connection established successfully');
      
      // Initialize default data if needed
      await this.ensureDefaultData();
      
      return true;
    } catch (error) {
      this.connectionStatus = 'error';
      console.error('❌ Database connection failed:', error);
      throw new Error(`Database initialization failed: ${error}`);
    }
  }

  /**
   * Check database connection health
   */
  async healthCheck(): Promise<{
    status: 'healthy' | 'unhealthy';
    message: string;
    details?: any;
  }> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Test connection with a simple query
      const result = await this.prisma.$queryRaw`SELECT 1 as test`;
      
      return {
        status: 'healthy',
        message: 'Database connection is healthy',
        details: { test: result }
      };
    } catch (error) {
      this.connectionStatus = 'error';
      return {
        status: 'unhealthy',
        message: 'Database connection is unhealthy',
        details: { error: error.message }
      };
    }
  }

  /**
   * Get current connection status
   */
  getConnectionStatus(): 'connecting' | 'connected' | 'error' | 'disconnected' {
    return this.connectionStatus;
  }

  /**
   * Ensure default data is available
   */
  private async ensureDefaultData(): Promise<void> {
    try {
      const domainCount = await this.prisma.whitelistedDomain.count();
      
      if (domainCount === 0) {
        console.log('📊 No domains found, initializing default data...');
        await this.initializeDefaultDomains([
          'pdfescape.com',
          'smallpdf.com',
          'onedrive.com',
          'pricol.co.in'
        ]);
        console.log('✅ Default data initialized');
      } else {
        console.log(`📊 Database contains ${domainCount} domains`);
      }
    } catch (error) {
      console.error('⚠️ Error ensuring default data:', error);
    }
  }

  /**
   * Gracefully disconnect from database
   */
  async disconnect(): Promise<void> {
    try {
      await this.prisma.$disconnect();
      this.connectionStatus = 'disconnected';
      this.isInitialized = false;
      console.log('🔌 Database connection closed');
    } catch (error) {
      console.error('❌ Error disconnecting from database:', error);
    }
  }

  // Whitelist domain operations
  async getAllWhitelistedDomains(options: {
    includeInactive?: boolean;
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  } = {}): Promise<{ domains: DomainWithAudit[]; total: number }> {
    try {
      const {
        includeInactive = false,
        category,
        search,
        page = 1,
        limit = 50
      } = options;

      const where = {
        ...(includeInactive ? {} : { isActive: true }),
        ...(category ? { category } : {}),
        ...(search ? {
          OR: [
            { domain: { contains: search, mode: 'insensitive' } },
            { notes: { contains: search, mode: 'insensitive' } }
          ]
        } : {})
      };

      const [domains, total] = await Promise.all([
        this.prisma.whitelistedDomain.findMany({
          where,
          include: { auditLogs: true },
          orderBy: { domain: 'asc' },
          skip: (page - 1) * limit,
          take: limit
        }),
        this.prisma.whitelistedDomain.count({ where })
      ]);

      return { domains, total };
    } catch (error) {
      console.error('Error fetching whitelisted domains:', error);
      throw error;
    }
  }

  async addWhitelistedDomain(
    domain: string,
    options: {
      notes?: string;
      addedBy?: string;
      category?: string;
      isWildcard?: boolean;
      expiresAt?: Date;
    } = {}
  ): Promise<DomainWithAudit> {
    try {
      const normalizedDomain = DomainUtils.normalizeDomain(domain);
      if (!DomainUtils.isValidDomain(normalizedDomain)) {
        throw new Error('Invalid domain format');
      }

      const category = options.category || DomainUtils.categorizeDomain(normalizedDomain);

      const result = await this.prisma.$transaction(async (tx) => {
        const domain = await tx.whitelistedDomain.create({
          data: {
            domain: normalizedDomain,
            category,
            isWildcard: options.isWildcard || false,
            notes: options.notes,
            addedBy: options.addedBy,
            expiresAt: options.expiresAt,
            auditLogs: {
              create: {
                action: 'ADD',
                performedBy: options.addedBy,
                details: options.notes
              }
            }
          },
          include: { auditLogs: true }
        });

        return domain;
      });

      return result;
    } catch (error) {
      console.error('Error adding whitelisted domain:', error);
      throw error;
    }
  }

  async updateWhitelistedDomain(
    domain: string,
    updates: {
      notes?: string;
      category?: string;
      isActive?: boolean;
      expiresAt?: Date | null;
      updatedBy?: string;
    }
  ): Promise<DomainWithAudit> {
    try {
      const normalizedDomain = DomainUtils.normalizeDomain(domain);
      
      const result = await this.prisma.$transaction(async (tx) => {
        const domain = await tx.whitelistedDomain.update({
          where: { domain: normalizedDomain },
          data: {
            ...updates,
            auditLogs: {
              create: {
                action: 'UPDATE',
                performedBy: updates.updatedBy,
                details: JSON.stringify(updates)
              }
            }
          },
          include: { auditLogs: true }
        });

        return domain;
      });

      return result;
    } catch (error) {
      console.error('Error updating whitelisted domain:', error);
      throw error;
    }
  }

  async removeWhitelistedDomain(domain: string, removedBy?: string): Promise<void> {
    try {
      const normalizedDomain = DomainUtils.normalizeDomain(domain);
      
      await this.prisma.$transaction(async (tx) => {
        const domain = await tx.whitelistedDomain.findUnique({
          where: { domain: normalizedDomain }
        });

        if (!domain) {
          throw new Error('Domain not found');
        }

        await tx.auditLog.create({
          data: {
            action: 'REMOVE',
            domain: normalizedDomain,
            performedBy: removedBy,
            domainId: domain.id
          }
        });

        await tx.whitelistedDomain.delete({
          where: { domain: normalizedDomain }
        });
      });
    } catch (error) {
      console.error('Error removing whitelisted domain:', error);
      throw error;
    }
  }

  async isDomainWhitelisted(domain: string): Promise<boolean> {
    try {
      const normalizedDomain = DomainUtils.normalizeDomain(domain);
      if (!normalizedDomain) return false;

      // Check for exact match
      const exactMatch = await this.prisma.whitelistedDomain.findFirst({
        where: {
          domain: normalizedDomain,
          isActive: true,
          OR: [
            { expiresAt: null },
            { expiresAt: { gt: new Date() } }
          ]
        }
      });

      if (exactMatch) return true;

      // Check for wildcard matches
      const wildcardDomains = await this.prisma.whitelistedDomain.findMany({
        where: {
          isWildcard: true,
          isActive: true,
          OR: [
            { expiresAt: null },
            { expiresAt: { gt: new Date() } }
          ]
        }
      });

      return wildcardDomains.some(wildcard => 
        DomainUtils.matchesWildcard(normalizedDomain, wildcard.domain)
      );
    } catch (error) {
      console.error('Error checking whitelisted domain:', error);
      return false;
    }
  }

  async getDomainStats(): Promise<{
    total: number;
    active: number;
    expired: number;
    byCategory: Record<string, number>;
  }> {
    try {
      const [total, active, expired, categories] = await Promise.all([
        this.prisma.whitelistedDomain.count(),
        this.prisma.whitelistedDomain.count({
          where: { isActive: true }
        }),
        this.prisma.whitelistedDomain.count({
          where: {
            expiresAt: { lt: new Date() }
          }
        }),
        this.prisma.whitelistedDomain.groupBy({
          by: ['category'],
          _count: true
        })
      ]);

      const byCategory = categories.reduce((acc, curr) => ({
        ...acc,
        [curr.category]: curr._count
      }), {} as Record<string, number>);

      return {
        total,
        active,
        expired,
        byCategory
      };
    } catch (error) {
      console.error('Error getting domain stats:', error);
      throw error;
    }
  }

  // Initialize database with default domains if empty
  async initializeDefaultDomains(defaultDomains: string[]) {
    try {
      const count = await this.prisma.whitelistedDomain.count();
      if (count === 0) {
        const domains = defaultDomains.map(domain => ({
          domain: DomainUtils.normalizeDomain(domain),
          category: DomainUtils.categorizeDomain(domain),
          notes: 'Added during initialization',
          addedBy: 'system',
          isWildcard: domain.includes('*')
        }));

        await this.prisma.$transaction(async (tx) => {
          for (const domain of domains) {
            await tx.whitelistedDomain.create({
              data: {
                ...domain,
                auditLogs: {
                  create: {
                    action: 'ADD',
                    performedBy: 'system',
                    details: 'Added during initialization'
                  }
                }
              }
            });
          }
        });
      }
    } catch (error) {
      console.error('Error initializing default domains:', error);
      throw error;
    }
  }
}

export const databaseService = DatabaseService.getInstance(); 