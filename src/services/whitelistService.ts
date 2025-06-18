import { apiService } from './apiService';

// Mock data for whitelisted domains - this will be replaced with real database data
const mockWhitelistedDomains = [
  'google.com',
  '*.pricol.com',
  'github.com',
  '*.microsoft.com',
  'linkedin.com',
  'stackoverflow.com',
  '*.amazon.com',
  'zoom.us',
  'slack.com',
  '*.googleapis.com',
  'pdfescape.com',
  'smallpdf.com',
  'onedrive.com',
  'pricol.co.in',
  'bajajauto.co.in',
  'tradewithtvs.com',
  'adobe.com',
  'chatgpt.com',
  'airtel.com',
  'cibnext.icicibank.com'
];

// Mock data with full details
const mockDomainsWithDetails = mockWhitelistedDomains.map((domain, index) => ({
  id: index + 1,
  domain,
  category: domain.includes('pricol') ? 'company_service' : 
           domain.includes('pdf') ? 'pdf_service' : 
           domain.includes('microsoft') || domain.includes('onedrive') ? 'cloud_storage' :
           domain.includes('bajaj') || domain.includes('tvs') ? 'automotive' :
           domain.includes('gov') ? 'government' :
           domain.includes('bank') ? 'banking' : 'external',
  isWildcard: domain.includes('*'),
  notes: `Mock domain ${index + 1} - ${domain}`,
  addedBy: 'system',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  isActive: true,
  riskLevel: 'LOW',
  dataClass: 'PUBLIC',
  auditLogs: []
}));

export const whitelistService = {
  // Get all whitelisted domains
  async getWhitelist(): Promise<string[]> {
    try {
      // Try API first
      const response = await apiService.getWhitelistWithDetails();
      return response.domains.map(domain => domain.domain);
    } catch (error) {
      console.log('API not available, using mock data');
      return mockWhitelistedDomains;
    }
  },

  // Get whitelist with full details
  async getWhitelistWithDetails(): Promise<{ domains: any[]; total: number }> {
    try {
      // Try API first
      return await apiService.getWhitelistWithDetails();
    } catch (error) {
      console.log('API not available, using mock data');
      return {
        domains: mockDomainsWithDetails,
        total: mockDomainsWithDetails.length
      };
    }
  },

  // Add domain to whitelist
  async addToWhitelist(domain: string, notes?: string, addedBy?: string): Promise<any> {
    try {
      // Try API first
      return await apiService.addToWhitelist(domain, notes, addedBy);
    } catch (error) {
      console.log('API not available, adding to mock data');
      const newDomain = {
        id: Date.now(),
        domain: domain.toLowerCase(),
        category: 'external',
        isWildcard: domain.includes('*'),
        notes: notes || '',
        addedBy: addedBy || 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true,
        riskLevel: 'LOW',
        dataClass: 'PUBLIC',
        auditLogs: []
      };
      
      mockDomainsWithDetails.push(newDomain);
      return newDomain;
    }
  },

  // Update whitelist domain
  async updateWhitelistDomain(domain: string, updates: Record<string, any>): Promise<any> {
    try {
      // Try API first
      return await apiService.updateWhitelistDomain(domain, updates);
    } catch (error) {
      console.log('API not available, updating mock data');
      const domainIndex = mockDomainsWithDetails.findIndex(d => d.domain === domain.toLowerCase());
      if (domainIndex === -1) {
        throw new Error('Domain not found');
      }
      
      mockDomainsWithDetails[domainIndex] = {
        ...mockDomainsWithDetails[domainIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      return mockDomainsWithDetails[domainIndex];
    }
  },

  // Remove domain from whitelist
  async removeFromWhitelist(domain: string): Promise<void> {
    try {
      // Try API first
      await apiService.removeFromWhitelist(domain);
    } catch (error) {
      console.log('API not available, removing from mock data');
      const domainIndex = mockDomainsWithDetails.findIndex(d => d.domain === domain.toLowerCase());
      if (domainIndex === -1) {
        throw new Error('Domain not found');
      }
      
      mockDomainsWithDetails.splice(domainIndex, 1);
    }
  },

  // Check if domain is whitelisted
  async isDomainWhitelisted(domain: string): Promise<boolean> {
    try {
      // Try API first
      const result = await apiService.checkDomainWhitelist(domain);
      return result.isWhitelisted;
    } catch (error) {
      console.log('API not available, checking mock data');
      const normalizedDomain = domain.toLowerCase();
      
      // Check for exact match
      const exactMatch = mockDomainsWithDetails.find(d => 
        d.domain === normalizedDomain && d.isActive
      );
      
      if (exactMatch) {
        return true;
      }
      
      // Check for wildcard matches
      const wildcardMatch = mockDomainsWithDetails.find(d => {
        if (!d.isWildcard || !d.isActive) return false;
        const pattern = d.domain.replace(/\*/g, '.*');
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(normalizedDomain);
      });
      
      return !!wildcardMatch;
    }
  },

  // Get whitelist statistics
  async getWhitelistStats(): Promise<any> {
    try {
      // Try API first
      return await apiService.getWhitelistStats();
    } catch (error) {
      console.log('API not available, using mock stats');
      const total = mockDomainsWithDetails.length;
      const active = mockDomainsWithDetails.filter(d => d.isActive).length;
      const wildcard = mockDomainsWithDetails.filter(d => d.isWildcard).length;
      
      const byCategory = mockDomainsWithDetails.reduce((acc: any, domain) => {
        acc[domain.category] = (acc[domain.category] || 0) + 1;
        return acc;
      }, {});
      
      return {
        total,
        active,
        wildcard,
        byCategory
      };
    }
  }
};
