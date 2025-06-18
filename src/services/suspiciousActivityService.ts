import { whitelistService } from './whitelistService';

export interface SuspiciousActivity {
  logId: string;
  reasons: string[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  details: string;
}

class SuspiciousActivityService {
  async detectSuspiciousActivity(logEntry: any): Promise<SuspiciousActivity | null> {
    const reasons: string[] = [];
    let riskLevel: 'low' | 'medium' | 'high' | 'critical' = 'low';

    // Rule 1: Single external recipient
    if (this.isSingleExternalRecipient(logEntry.destination)) {
      reasons.push("Single external recipient");
      riskLevel = 'medium';
    }

    // Rule 2: Untrusted destination domain
    if (await this.isUntrustedDomain(logEntry.destination)) {
      reasons.push("Untrusted destination domain");
      riskLevel = riskLevel === 'medium' ? 'high' : 'medium';
    }

    // Rule 3: Large file transfer to external domain
    if (this.isLargeFileToExternal(logEntry)) {
      reasons.push("Large file transfer to external domain");
      riskLevel = 'high';
    }

    // Rule 4: Sensitive file types
    if (this.isSensitiveFileType(logEntry.source)) {
      reasons.push("Sensitive file type detected");
      riskLevel = riskLevel === 'high' ? 'critical' : 'high';
    }

    // Rule 5: Multiple external recipients
    if (this.hasMultipleExternalRecipients(logEntry.destination)) {
      reasons.push("Multiple external recipients");
      riskLevel = 'critical';
    }

    if (reasons.length === 0) {
      return null;
    }

    return {
      logId: logEntry.id,
      reasons,
      riskLevel,
      details: this.generateDetails(logEntry, reasons)
    };
  }

  private isSingleExternalRecipient(destination: string): boolean {
    if (!destination || !destination.includes("@")) return false;
    
    const recipients = this.parseRecipients(destination);
    const pricolRecipients = recipients.filter(r => r.endsWith("@pricol.com"));
    
    return recipients.length === 1 && pricolRecipients.length === 0;
  }

  private async isUntrustedDomain(destination: string): Promise<boolean> {
    if (!destination) return false;
    
    const domain = this.extractDomain(destination);
    if (!domain) return false;
    
    // Use the whitelist service to check if domain is trusted
    return !(await whitelistService.isWhitelisted(domain));
  }

  private isLargeFileToExternal(logEntry: any): boolean {
    const dataSize = parseInt(logEntry.dataSize || "0");
    const destination = logEntry.destination || "";
    
    // Consider files > 10MB as large
    const isLarge = dataSize > 10000000;
    const isExternal = !destination.includes("@pricol.com");
    
    return isLarge && isExternal;
  }

  private isSensitiveFileType(source: string): boolean {
    if (!source) return false;
    
    const sensitiveKeywords = [
      "salary", "stipend", "payroll", "financial", "confidential",
      "private", "restricted", "internal", "trainees"
    ];
    
    const sensitiveExtensions = [".xlsx", ".xls", ".pdf", ".doc", ".docx"];
    
    const sourceContent = source.toLowerCase();
    const hasSensitiveKeyword = sensitiveKeywords.some(keyword => 
      sourceContent.includes(keyword)
    );
    const hasSensitiveExtension = sensitiveExtensions.some(ext => 
      sourceContent.endsWith(ext)
    );
    
    return hasSensitiveKeyword && hasSensitiveExtension;
  }

  private hasMultipleExternalRecipients(destination: string): boolean {
    if (!destination || !destination.includes("@")) return false;
    
    const recipients = this.parseRecipients(destination);
    const externalRecipients = recipients.filter(r => !r.endsWith("@pricol.com"));
    
    return externalRecipients.length > 1;
  }

  private parseRecipients(destination: string): string[] {
    if (!destination) return [];
    
    // Handle both ';' and ',' separators
    let normalized = destination.replace(/[;,]/g, ';');
    
    return normalized
      .split(';')
      .map(r => r.trim().toLowerCase())
      .filter(r => r.length > 0 && r.includes("@"));
  }

  private extractDomain(destination: string): string {
    try {
      if (destination.includes("http")) {
        const url = new URL(destination);
        return url.hostname.toLowerCase();
      } else if (destination.includes("@")) {
        const recipients = this.parseRecipients(destination);
        if (recipients.length > 0) {
          return recipients[0].split("@")[1];
        }
      }
      return destination.toLowerCase();
    } catch {
      return "";
    }
  }

  private generateDetails(logEntry: any, reasons: string[]): string {
    const details = [
      `User: ${logEntry.user || 'Unknown'}`,
      `Source: ${logEntry.source || 'Unknown'}`,
      `Destination: ${logEntry.destination || 'Unknown'}`,
      `Suspicious reasons: ${reasons.join(", ")}`
    ];
    
    return details.join(" | ");
  }
}

export const suspiciousActivityService = new SuspiciousActivityService();
