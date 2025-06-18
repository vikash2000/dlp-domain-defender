
import { supabase } from '@/integrations/supabase/client';

export const whitelistService = {
  // Get all whitelisted domains
  async getWhitelist(): Promise<string[]> {
    try {
      const { data, error } = await supabase
        .from('whitelist_domains')
        .select('domain')
        .eq('is_active', true);

      if (error) throw error;
      return data?.map(item => item.domain) || [];
    } catch (error) {
      console.error('Error fetching whitelist:', error);
      return [];
    }
  },

  // Get whitelist with full details
  async getWhitelistWithDetails(): Promise<{ domains: any[]; total: number }> {
    try {
      const { data, error } = await supabase
        .from('whitelist_domains')
        .select(`
          *,
          auditLogs:whitelist_audit_logs(*)
        `)
        .order('domain', { ascending: true });

      if (error) throw error;
      
      return {
        domains: data || [],
        total: data?.length || 0
      };
    } catch (error) {
      console.error('Error fetching whitelist with details:', error);
      return { domains: [], total: 0 };
    }
  },

  // Add domain to whitelist
  async addToWhitelist(domain: string, notes?: string, addedBy?: string): Promise<any> {
    try {
      const normalizedDomain = domain.toLowerCase().trim();
      
      // Insert the domain
      const { data: domainData, error: domainError } = await supabase
        .from('whitelist_domains')
        .insert({
          domain: normalizedDomain,
          category: this.categorizeDomain(normalizedDomain),
          is_wildcard: domain.includes('*'),
          notes: notes || '',
          added_by: addedBy || 'user',
          risk_level: 'LOW',
          data_class: 'PUBLIC'
        })
        .select()
        .single();

      if (domainError) throw domainError;

      // Add audit log
      await supabase
        .from('whitelist_audit_logs')
        .insert({
          domain_id: domainData.id,
          action: 'ADD',
          domain_name: normalizedDomain,
          performed_by: addedBy || 'user',
          details: notes || 'Domain added to whitelist'
        });

      return domainData;
    } catch (error) {
      console.error('Error adding to whitelist:', error);
      throw error;
    }
  },

  // Update whitelist domain
  async updateWhitelistDomain(domain: string, updates: Record<string, any>): Promise<any> {
    try {
      const normalizedDomain = domain.toLowerCase().trim();
      
      const { data, error } = await supabase
        .from('whitelist_domains')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('domain', normalizedDomain)
        .select()
        .single();

      if (error) throw error;

      // Add audit log
      await supabase
        .from('whitelist_audit_logs')
        .insert({
          domain_id: data.id,
          action: 'UPDATE',
          domain_name: normalizedDomain,
          performed_by: updates.updatedBy || 'user',
          details: JSON.stringify(updates)
        });

      return data;
    } catch (error) {
      console.error('Error updating whitelist domain:', error);
      throw error;
    }
  },

  // Remove domain from whitelist
  async removeFromWhitelist(domain: string): Promise<void> {
    try {
      const normalizedDomain = domain.toLowerCase().trim();
      
      // Get domain data first for audit log
      const { data: domainData } = await supabase
        .from('whitelist_domains')
        .select('id')
        .eq('domain', normalizedDomain)
        .single();

      if (domainData) {
        // Add audit log before deletion
        await supabase
          .from('whitelist_audit_logs')
          .insert({
            domain_id: domainData.id,
            action: 'REMOVE',
            domain_name: normalizedDomain,
            performed_by: 'user',
            details: 'Domain removed from whitelist'
          });
      }

      // Delete the domain
      const { error } = await supabase
        .from('whitelist_domains')
        .delete()
        .eq('domain', normalizedDomain);

      if (error) throw error;
    } catch (error) {
      console.error('Error removing from whitelist:', error);
      throw error;
    }
  },

  // Check if domain is whitelisted
  async isDomainWhitelisted(domain: string): Promise<boolean> {
    try {
      const normalizedDomain = domain.toLowerCase().trim();
      
      // Check for exact match
      const { data: exactMatch } = await supabase
        .from('whitelist_domains')
        .select('domain')
        .eq('domain', normalizedDomain)
        .eq('is_active', true)
        .single();

      if (exactMatch) return true;

      // Check for wildcard matches
      const { data: wildcardDomains } = await supabase
        .from('whitelist_domains')
        .select('domain')
        .eq('is_wildcard', true)
        .eq('is_active', true);

      if (wildcardDomains) {
        return wildcardDomains.some(wildcard => {
          const pattern = wildcard.domain.replace(/\*/g, '.*');
          const regex = new RegExp(`^${pattern}$`);
          return regex.test(normalizedDomain);
        });
      }

      return false;
    } catch (error) {
      console.error('Error checking domain whitelist:', error);
      return false;
    }
  },

  // Get whitelist statistics
  async getWhitelistStats(): Promise<any> {
    try {
      const { data: domains } = await supabase
        .from('whitelist_domains')
        .select('category, is_active, is_wildcard');

      if (!domains) return { total: 0, active: 0, wildcard: 0, byCategory: {} };

      const total = domains.length;
      const active = domains.filter(d => d.is_active).length;
      const wildcard = domains.filter(d => d.is_wildcard).length;
      
      const byCategory = domains.reduce((acc: any, domain) => {
        acc[domain.category] = (acc[domain.category] || 0) + 1;
        return acc;
      }, {});

      return { total, active, wildcard, byCategory };
    } catch (error) {
      console.error('Error getting whitelist stats:', error);
      return { total: 0, active: 0, wildcard: 0, byCategory: {} };
    }
  },

  // Helper function to categorize domains
  categorizeDomain(domain: string): string {
    if (domain.includes('pricol')) return 'company_service';
    if (domain.includes('pdf')) return 'pdf_service';
    if (domain.includes('microsoft') || domain.includes('onedrive')) return 'cloud_storage';
    if (domain.includes('bajaj') || domain.includes('tvs')) return 'automotive';
    if (domain.includes('gov')) return 'government';
    if (domain.includes('bank')) return 'banking';
    return 'external';
  }
};
