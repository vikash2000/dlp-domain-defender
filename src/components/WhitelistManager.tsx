
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Plus, X, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WhitelistService } from "@/services/whitelistService";

export const WhitelistManager = () => {
  const [whitelist, setWhitelist] = useState<string[]>(WhitelistService.getWhitelist());
  const [newDomain, setNewDomain] = useState("");
  const { toast } = useToast();

  const handleAddDomain = () => {
    if (!newDomain.trim()) {
      toast({
        title: "Invalid domain",
        description: "Please enter a valid domain",
        variant: "destructive"
      });
      return;
    }

    WhitelistService.addToWhitelist(newDomain);
    setWhitelist(WhitelistService.getWhitelist());
    setNewDomain("");
    
    toast({
      title: "Domain added",
      description: `${newDomain} has been added to whitelist`
    });
  };

  const handleRemoveDomain = (domain: string) => {
    WhitelistService.removeFromWhitelist(domain);
    setWhitelist(WhitelistService.getWhitelist());
    
    toast({
      title: "Domain removed",
      description: `${domain} has been removed from whitelist`
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Whitelist Management
        </CardTitle>
        <CardDescription>
          Manage trusted domains that should be excluded from suspicious activity detection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <Label htmlFor="new-domain">Add Domain</Label>
            <Input
              id="new-domain"
              placeholder="example.com"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddDomain()}
            />
          </div>
          <Button onClick={handleAddDomain} className="mt-6">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Whitelisted Domains ({whitelist.length})</Label>
          {whitelist.length === 0 ? (
            <p className="text-sm text-muted-foreground">No domains in whitelist</p>
          ) : (
            <div className="max-h-64 overflow-y-auto space-y-1">
              {whitelist.map((domain, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <Badge variant="outline" className="text-xs">
                    {domain}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveDomain(domain)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
