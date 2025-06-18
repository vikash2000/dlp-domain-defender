import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get all whitelisted domains
app.get('/api/whitelist', async (req, res) => {
  try {
    const { search, includeInactive = false } = req.query;
    
    const where = {
      ...(includeInactive === 'false' ? { isActive: true } : {}),
      ...(search ? {
        OR: [
          { domain: { contains: search as string, mode: 'insensitive' } },
          { notes: { contains: search as string, mode: 'insensitive' } }
        ]
      } : {})
    };

    const [domains, total] = await Promise.all([
      prisma.whitelistedDomain.findMany({
        where,
        include: { auditLogs: true },
        orderBy: { domain: 'asc' }
      }),
      prisma.whitelistedDomain.count({ where })
    ]);

    res.json({ domains, total });
  } catch (error) {
    console.error('Error fetching whitelist:', error);
    res.status(500).json({ error: 'Failed to fetch whitelist' });
  }
});

// Add domain to whitelist
app.post('/api/whitelist', async (req, res) => {
  try {
    const { domain, notes, category = 'external', isWildcard = false, expiresAt, addedBy = 'user' } = req.body;

    if (!domain) {
      res.status(400).json({ error: 'Domain is required' });
      return;
    }

    const newDomain = await prisma.whitelistedDomain.create({
      data: {
        domain: domain.toLowerCase(),
        category,
        isWildcard,
        notes,
        addedBy,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        auditLogs: {
          create: {
            action: 'ADD',
            domainName: domain,
            performedBy: addedBy,
            details: notes
          }
        }
      },
      include: { auditLogs: true }
    });

    res.json(newDomain);
  } catch (error) {
    console.error('Error adding domain:', error);
    res.status(500).json({ error: 'Failed to add domain' });
  }
});

// Update domain
app.put('/api/whitelist/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const { notes, category, isActive, updatedBy = 'user' } = req.body;

    const updatedDomain = await prisma.whitelistedDomain.update({
      where: { domain: domain.toLowerCase() },
      data: {
        ...(notes !== undefined && { notes }),
        ...(category !== undefined && { category }),
        ...(isActive !== undefined && { isActive }),
        auditLogs: {
          create: {
            action: 'UPDATE',
            domainName: domain,
            performedBy: updatedBy,
            details: JSON.stringify({ notes, category, isActive })
          }
        }
      },
      include: { auditLogs: true }
    });

    res.json(updatedDomain);
  } catch (error) {
    console.error('Error updating domain:', error);
    res.status(500).json({ error: 'Failed to update domain' });
  }
});

// Remove domain from whitelist
app.delete('/api/whitelist/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const { removedBy = 'user' } = req.body;

    const domainRecord = await prisma.whitelistedDomain.findUnique({
      where: { domain: domain.toLowerCase() }
    });

    if (!domainRecord) {
      res.status(404).json({ error: 'Domain not found' });
      return;
    }

    await prisma.auditLog.create({
      data: {
        action: 'REMOVE',
        domainName: domain,
        performedBy: removedBy,
        domainId: domainRecord.id
      }
    });

    await prisma.whitelistedDomain.delete({
      where: { domain: domain.toLowerCase() }
    });

    res.json({ message: 'Domain removed successfully' });
  } catch (error) {
    console.error('Error removing domain:', error);
    res.status(500).json({ error: 'Failed to remove domain' });
  }
});

// Check if domain is whitelisted
app.get('/api/whitelist/check/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const normalizedDomain = domain.toLowerCase();

    // Check for exact match
    const exactMatch = await prisma.whitelistedDomain.findFirst({
      where: {
        domain: normalizedDomain,
        isActive: true,
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      }
    });

    if (exactMatch) {
      res.json({ isWhitelisted: true, matchType: 'exact' });
      return;
    }

    // Check for wildcard matches
    const wildcardDomains = await prisma.whitelistedDomain.findMany({
      where: {
        isWildcard: true,
        isActive: true,
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      }
    });

    const wildcardMatch = wildcardDomains.find(wildcard => {
      const pattern = wildcard.domain.replace(/\*/g, '.*');
      const regex = new RegExp(`^${pattern}$`);
      return regex.test(normalizedDomain);
    });

    if (wildcardMatch) {
      res.json({ isWhitelisted: true, matchType: 'wildcard', matchedPattern: wildcardMatch.domain });
      return;
    }

    res.json({ isWhitelisted: false });
  } catch (error) {
    console.error('Error checking domain:', error);
    res.status(500).json({ error: 'Failed to check domain' });
  }
});

// Get whitelist statistics
app.get('/api/whitelist/stats', async (req, res) => {
  try {
    const [total, active, wildcard, byCategory] = await Promise.all([
      prisma.whitelistedDomain.count(),
      prisma.whitelistedDomain.count({ where: { isActive: true } }),
      prisma.whitelistedDomain.count({ where: { isWildcard: true } }),
      prisma.whitelistedDomain.groupBy({
        by: ['category'],
        _count: { category: true }
      })
    ]);

    const categories = byCategory.map(item => ({
      category: item.category,
      count: item._count.category
    }));

    const byCategoryMap = categories.reduce((acc, curr) => ({
      ...acc,
      [curr.category]: curr.count
    }), {});

    res.json({
      total,
      active,
      wildcard,
      byCategory: byCategoryMap,
      categories
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Initialize database connection
async function initializeDatabase() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    
    // Test query to ensure database is working
    const count = await prisma.whitelistedDomain.count();
    console.log(`📊 Database contains ${count} whitelisted domains`);
    
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

// Start server
async function startServer() {
  const dbConnected = await initializeDatabase();
  
  if (!dbConnected) {
    console.error('❌ Cannot start server without database connection');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 API server running on port ${PORT}`);
    console.log(`📡 Health check: http://localhost:${PORT}/health`);
    console.log(`🔗 Whitelist API: http://localhost:${PORT}/api/whitelist`);
  });
}

startServer().catch(console.error); 