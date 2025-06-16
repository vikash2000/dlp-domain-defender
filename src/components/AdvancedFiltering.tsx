
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Filter, AlertTriangle, Shield } from "lucide-react";

interface FilteringProps {
  onFilterChange: (filters: FilterConfig) => void;
}

export interface FilterConfig {
  searchText: string;
  excludeInternalEmails: boolean;
  excludeAllowedDomains: boolean;
  excludeExchangeSystem: boolean;
  excludeCloudStorage: boolean;
  showSuspiciousOnly: boolean;
}

const ALLOWED_DOMAINS = [
  "pdfescape.com", "smallpdf.com", "ilovepdf.com", "pdf2go.com",
  "1drv.ms", "onedrive.live.com", "onedrive.com", "pricol.freshservice.com",
  "bajajauto.co.in", "abdrive.bajajauto.com", "myapp.pricol.co.in",
  "tradewithtvs.com", "dfos.azurewebsites.net", "www.falstad.com",
  "freepdfconvert.com", "pricol.co.in", "pricol.com", "webpp.heromotocorp.biz",
  "pricollimited.atlassian.net", "unifiedportal-mem.epfindia.gov.in", "adobe.com",
  "eportal.incometax.gov.in", "gemini.google.com", "srm.inservices.tatamotors.com",
  "bulletlogistics.in", "twinengineers.com", "tvscorp.tvsmotor.com",
  "srm.ashokleyland.com", "dgft.gov.in", "v2.zenclass.in", "smlisuzu.net",
  "chatgpt.com", "pricolprecision.com", "pricolasia.com", "mca.gov.in",
  "pricoltravel.com", "stimulate.icsi.edu", "airtel.com", "www.sejda.com",
  "srmapps.mahindra.com", "cibnext.icicibank.com", "www.freeconvert.com",
  "publish.buffer.com", "tvsholdings.com", "sacl.co.in", "service.ariba.com"
];

export const AdvancedFiltering = ({ onFilterChange }: FilteringProps) => {
  const [filters, setFilters] = useState<FilterConfig>({
    searchText: "",
    excludeInternalEmails: true,
    excludeAllowedDomains: true,
    excludeExchangeSystem: true,
    excludeCloudStorage: true,
    showSuspiciousOnly: false
  });

  const updateFilter = (key: keyof FilterConfig, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Advanced Filtering
        </CardTitle>
        <CardDescription>
          Configure filtering rules based on your DLP analysis requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search Filter</Label>
          <Input
            id="search"
            placeholder="Filter logs by any field..."
            value={filters.searchText}
            onChange={(e) => updateFilter('searchText', e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Exclude Internal Emails (@pricol.com)</Label>
              <p className="text-xs text-muted-foreground">Remove internal company communications</p>
            </div>
            <Switch
              checked={filters.excludeInternalEmails}
              onCheckedChange={(checked) => updateFilter('excludeInternalEmails', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Exclude Allowed Domains</Label>
              <p className="text-xs text-muted-foreground">Filter out whitelisted destinations</p>
            </div>
            <Switch
              checked={filters.excludeAllowedDomains}
              onCheckedChange={(checked) => updateFilter('excludeAllowedDomains', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Exclude Exchange System Logs</Label>
              <p className="text-xs text-muted-foreground">Remove system-generated entries</p>
            </div>
            <Switch
              checked={filters.excludeExchangeSystem}
              onCheckedChange={(checked) => updateFilter('excludeExchangeSystem', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Exclude Cloud Storage (OneDrive)</Label>
              <p className="text-xs text-muted-foreground">Remove cloud storage activities</p>
            </div>
            <Switch
              checked={filters.excludeCloudStorage}
              onCheckedChange={(checked) => updateFilter('excludeCloudStorage', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <Label>Show Suspicious Only</Label>
              <p className="text-xs text-muted-foreground">Display flagged activities</p>
            </div>
            <Switch
              checked={filters.showSuspiciousOnly}
              onCheckedChange={(checked) => updateFilter('showSuspiciousOnly', checked)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Allowed Domains ({ALLOWED_DOMAINS.length})</Label>
          <div className="max-h-32 overflow-y-auto space-y-1">
            <div className="grid grid-cols-2 gap-1">
              {ALLOWED_DOMAINS.map((domain, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {domain}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            const resetFilters: FilterConfig = {
              searchText: "",
              excludeInternalEmails: false,
              excludeAllowedDomains: false,
              excludeExchangeSystem: false,
              excludeCloudStorage: false,
              showSuspiciousOnly: false
            };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
          className="w-full"
        >
          <Shield className="h-4 w-4 mr-2" />
          Reset All Filters
        </Button>
      </CardContent>
    </Card>
  );
};
