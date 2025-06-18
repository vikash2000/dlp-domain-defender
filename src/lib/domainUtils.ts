export class DomainUtils {
  /**
   * Validates if a string is a valid domain
   */
  static isValidDomain(domain: string): boolean {
    if (!domain) return false;
    
    // Basic domain validation regex
    const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
    return domainRegex.test(domain);
  }

  /**
   * Normalizes a domain string
   * - Removes protocol (http://, https://)
   * - Removes www. prefix
   * - Converts to lowercase
   * - Removes trailing slashes
   */
  static normalizeDomain(domain: string): string {
    if (!domain) return '';
    
    try {
      // Remove protocol if present
      let normalized = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
      
      // Remove trailing slashes and anything after them
      normalized = normalized.split('/')[0];
      
      // Convert to lowercase
      normalized = normalized.toLowerCase();
      
      // Remove any whitespace
      normalized = normalized.trim();
      
      return normalized;
    } catch {
      return domain.toLowerCase().trim();
    }
  }

  /**
   * Extracts domain from various formats (URL, email, etc.)
   */
  static extractDomain(input: string): string | null {
    if (!input) return null;
    
    try {
      // Handle URLs
      if (input.includes('://') || input.startsWith('www.')) {
        const url = new URL(input.startsWith('www.') ? `http://${input}` : input);
        return this.normalizeDomain(url.hostname);
      }
      
      // Handle email addresses
      if (input.includes('@')) {
        const email = input.trim().toLowerCase();
        const atIndex = email.lastIndexOf('@');
        if (atIndex > 0) {
          return this.normalizeDomain(email.slice(atIndex + 1));
        }
      }
      
      // Assume it's a domain
      return this.normalizeDomain(input);
    } catch {
      return null;
    }
  }

  /**
   * Checks if a domain matches a wildcard pattern
   * Example: *.company.com matches sub.company.com but not other.com
   */
  static matchesWildcard(domain: string, pattern: string): boolean {
    if (!domain || !pattern) return false;
    
    const normalizedDomain = this.normalizeDomain(domain);
    const normalizedPattern = this.normalizeDomain(pattern);
    
    if (!normalizedDomain || !normalizedPattern) return false;
    
    // Convert wildcard pattern to regex
    const regexPattern = normalizedPattern
      .replace(/\./g, '\\.')
      .replace(/\*/g, '[^.]+');
    
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(normalizedDomain);
  }

  /**
   * Categorizes a domain based on common patterns
   */
  static categorizeDomain(domain: string): 'internal' | 'external' | 'cloud' | 'unknown' {
    if (!domain) return 'unknown';
    
    const normalized = this.normalizeDomain(domain);
    
    // Internal domains
    const internalPatterns = [
      /\.local$/,
      /\.internal$/,
      /\.intranet$/,
      /\.corp$/,
      /\.company$/,
      /\.lan$/
    ];
    
    // Cloud service domains
    const cloudPatterns = [
      /\.cloud$/,
      /\.aws$/,
      /\.azure$/,
      /\.google$/,
      /\.cloudfront\.net$/,
      /\.amazonaws\.com$/,
      /\.googleapis\.com$/,
      /\.microsoftonline\.com$/,
      /\.office365\.com$/,
      /\.sharepoint\.com$/,
      /\.onedrive\.com$/,
      /\.dropbox\.com$/,
      /\.box\.com$/
    ];
    
    if (internalPatterns.some(pattern => pattern.test(normalized))) {
      return 'internal';
    }
    
    if (cloudPatterns.some(pattern => pattern.test(normalized))) {
      return 'cloud';
    }
    
    return 'external';
  }
} 