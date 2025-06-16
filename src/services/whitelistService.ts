
// Whitelist management service
export class WhitelistService {
  private static STORAGE_KEY = 'dlp-whitelist';

  static getWhitelist(): string[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static addToWhitelist(domain: string): void {
    const whitelist = this.getWhitelist();
    const normalizedDomain = domain.trim().toLowerCase();
    
    if (normalizedDomain && !whitelist.includes(normalizedDomain)) {
      whitelist.push(normalizedDomain);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(whitelist));
    }
  }

  static removeFromWhitelist(domain: string): void {
    const whitelist = this.getWhitelist();
    const normalizedDomain = domain.trim().toLowerCase();
    const filtered = whitelist.filter(d => d !== normalizedDomain);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
  }

  static extractDomain(value: string): string {
    const normalizedValue = value.trim().toLowerCase();
    
    if (normalizedValue.includes('http')) {
      try {
        const url = new URL(normalizedValue);
        return url.hostname;
      } catch {
        return normalizedValue;
      }
    } else if (normalizedValue.includes('@')) {
      return normalizedValue.split('@').pop() || normalizedValue;
    }
    
    return normalizedValue;
  }

  static isWhitelisted(destination: string): boolean {
    const whitelist = this.getWhitelist();
    const domain = this.extractDomain(destination);
    return whitelist.includes(domain);
  }
}
