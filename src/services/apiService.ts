// API service for handling database operations through HTTP requests
// This replaces direct Prisma client usage in the browser

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Mock data for fallback
const mockWhitelistData = {
  domains: [
    {
      id: 1,
      domain: 'google.com',
      category: 'external',
      isWildcard: false,
      notes: 'Search engine and productivity tools',
      addedBy: 'system',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      isActive: true,
      riskLevel: 'LOW',
      dataClass: 'public'
    },
    {
      id: 2,
      domain: '*.pricol.com',
      category: 'company_service',
      isWildcard: true,
      notes: 'Company internal services',
      addedBy: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      isActive: true,
      riskLevel: 'LOW',
      dataClass: 'internal'
    }
  ],
  total: 2
};

// Helper function to make API requests with fallback
async function apiRequest<T>(endpoint: string, options?: any): Promise<T> {
  try {
    const response = await axios({
      url: `${API_BASE_URL}${endpoint}`,
      method: options?.method || 'GET',
      data: options?.body,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      timeout: 5000 // 5 second timeout
    });
    return response.data;
  } catch (error) {
    console.warn(`API request failed for ${endpoint}, using mock data:`, error);
    throw error;
  }
}

export interface WhitelistedDomain {
  id: number;
  domain: string;
  category: string;
  notes?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  isWildcard: boolean;
  riskLevel: string;
  dataClass: string;
  auditLogs: Array<{
    id: number;
    action: string;
    domainName: string;
    performedBy?: string;
    details?: string;
    createdAt: string;
  }>;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface WhitelistResponse {
  domains: WhitelistedDomain[];
  total: number;
}

class ApiService {
  private static instance: ApiService;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = API_BASE_URL;
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    try {
      return await apiRequest('/health');
    } catch (error) {
      return {
        status: 'mock',
        timestamp: new Date().toISOString()
      };
    }
  }

  // Get whitelist with details
  async getWhitelistWithDetails(search?: string): Promise<{ domains: any[]; total: number }> {
    try {
      const endpoint = search ? `/whitelist?search=${encodeURIComponent(search)}` : '/whitelist';
      return await apiRequest(endpoint);
    } catch (error) {
      // Fallback to mock data
      let filteredDomains = mockWhitelistData.domains;
      
      if (search) {
        const searchLower = search.toLowerCase();
        filteredDomains = mockWhitelistData.domains.filter(domain =>
          domain.domain.toLowerCase().includes(searchLower) ||
          domain.notes?.toLowerCase().includes(searchLower)
        );
      }
      
      return {
        domains: filteredDomains,
        total: filteredDomains.length
      };
    }
  }

  // Add domain to whitelist
  async addToWhitelist(domain: string, notes?: string, addedBy?: string): Promise<any> {
    try {
      return await apiRequest('/whitelist', {
        method: 'POST',
        body: { domain, notes, addedBy }
      });
    } catch (error) {
      // Fallback to mock data
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
        dataClass: 'public'
      };
      
      mockWhitelistData.domains.push(newDomain);
      mockWhitelistData.total = mockWhitelistData.domains.length;
      
      return newDomain;
    }
  }

  // Update whitelist domain
  async updateWhitelistDomain(domain: string, updates: Record<string, any>): Promise<any> {
    try {
      return await apiRequest(`/whitelist/${encodeURIComponent(domain)}`, {
        method: 'PUT',
        body: updates
      });
    } catch (error) {
      // Fallback to mock data
      const domainIndex = mockWhitelistData.domains.findIndex(d => d.domain === domain.toLowerCase());
      if (domainIndex === -1) {
        throw new Error('Domain not found');
      }
      
      mockWhitelistData.domains[domainIndex] = {
        ...mockWhitelistData.domains[domainIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      return mockWhitelistData.domains[domainIndex];
    }
  }

  // Remove domain from whitelist
  async removeFromWhitelist(domain: string): Promise<void> {
    try {
      await apiRequest(`/whitelist/${encodeURIComponent(domain)}`, {
        method: 'DELETE',
        body: { removedBy: 'user' }
      });
    } catch (error) {
      // Fallback to mock data
      const domainIndex = mockWhitelistData.domains.findIndex(d => d.domain === domain.toLowerCase());
      if (domainIndex === -1) {
        throw new Error('Domain not found');
      }
      
      mockWhitelistData.domains.splice(domainIndex, 1);
      mockWhitelistData.total = mockWhitelistData.domains.length;
    }
  }

  // Check if domain is whitelisted
  async checkDomainWhitelist(domain: string): Promise<{ isWhitelisted: boolean; matchType?: string }> {
    try {
      return await apiRequest(`/whitelist/check/${encodeURIComponent(domain)}`);
    } catch (error) {
      // Fallback to mock data
      const normalizedDomain = domain.toLowerCase();
      
      // Check for exact match
      const exactMatch = mockWhitelistData.domains.find(d => 
        d.domain === normalizedDomain && d.isActive
      );
      
      if (exactMatch) {
        return { isWhitelisted: true, matchType: 'exact' };
      }
      
      // Check for wildcard matches
      const wildcardMatch = mockWhitelistData.domains.find(d => {
        if (!d.isWildcard || !d.isActive) return false;
        const pattern = d.domain.replace(/\*/g, '.*');
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(normalizedDomain);
      });
      
      if (wildcardMatch) {
        return { isWhitelisted: true, matchType: 'wildcard' };
      }
      
      return { isWhitelisted: false };
    }
  }

  // Get whitelist statistics
  async getWhitelistStats(): Promise<any> {
    try {
      return await apiRequest('/whitelist/stats');
    } catch (error) {
      // Fallback to mock data
      const total = mockWhitelistData.domains.length;
      const active = mockWhitelistData.domains.filter(d => d.isActive).length;
      const wildcard = mockWhitelistData.domains.filter(d => d.isWildcard).length;
      
      const byCategory = mockWhitelistData.domains.reduce((acc: any, domain) => {
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

  // DLP operations
  async getDLPStats(): Promise<unknown> {
    try {
      const response = await this.request<ApiResponse<unknown>>('/dlp/stats');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch DLP stats:', error);
      // Return mock data if API is not available
      return {
        activePolicies: 24,
        blockedEvents: 156,
        riskScore: 7.2,
        criticalAlerts: 0
      };
    }
  }

  async getSecurityMetrics(): Promise<unknown> {
    try {
      const response = await this.request<ApiResponse<unknown>>('/security/metrics');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch security metrics:', error);
      // Return mock data if API is not available
      return {
        threatLevel: 'medium',
        incidentsToday: 12,
        blockedAttempts: 45,
        riskScore: 7.2
      };
    }
  }

  async getRealTimeLogs(): Promise<unknown[]> {
    try {
      const response = await this.request<ApiResponse<unknown[]>>('/dlp/logs/realtime');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch real-time logs:', error);
      return [];
    }
  }

  async getHistoricalLogs(): Promise<unknown[]> {
    try {
      const response = await this.request<ApiResponse<unknown[]>>('/dlp/logs/historical');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch historical logs:', error);
      return [];
    }
  }

  async getSuspiciousActivity(): Promise<unknown[]> {
    try {
      const response = await this.request<ApiResponse<unknown[]>>('/suspicious-activity');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch suspicious activity:', error);
      return [];
    }
  }
}

export const apiService = ApiService.getInstance(); 