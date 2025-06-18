import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Plus, X, Shield, Loader2, Trash2, Edit, Save, Star, AlertTriangle, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { whitelistService } from "@/services/whitelistService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/services/apiService";

interface DomainData {
  id: number;
  domain: string;
  category: string;
  isWildcard: boolean;
  notes?: string;
  addedBy?: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  isActive: boolean;
  riskLevel: string;
  dataClass: string;
}

interface NewDomainForm {
  domain: string;
  category: string;
  notes: string;
  isWildcard: boolean;
  expiresAt?: string;
}

export const WhitelistManager = () => {
  const [newDomainForm, setNewDomainForm] = useState<NewDomainForm>({
    domain: "",
    category: "external",
    notes: "",
    isWildcard: false
  });
  const [editingDomain, setEditingDomain] = useState<DomainData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error' | 'mock'>('connecting');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query for fetching whitelist with API integration
  const { data: whitelistData, isLoading, error } = useQuery({
    queryKey: ['whitelist-domains', searchTerm],
    queryFn: async () => {
      const result = await whitelistService.getWhitelistWithDetails();
      return result;
    },
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  // Initialize connection
  useEffect(() => {
    const initConnection = async () => {
      try {
        setDbStatus('connecting');
        // Test API connection
        const healthCheck = await apiService.healthCheck();
        if (healthCheck.status === 'ok') {
          setDbStatus('connected');
          toast({
            title: "Database Connected",
            description: "Successfully connected to the API server.",
            variant: "default"
          });
        } else {
          setDbStatus('mock');
          toast({
            title: "Using Mock Data",
            description: "API server not available. Using local mock data for testing.",
            variant: "default"
          });
        }
      } catch (error) {
        console.log('API connection failed, using mock data');
        setDbStatus('mock');
        toast({
          title: "Using Mock Data",
          description: "API server not available. Using local mock data for testing.",
          variant: "default"
        });
      }
    };
    initConnection();
  }, [toast]);

  // Mutation for adding domain
  const addMutation = useMutation({
    mutationFn: async (formData: NewDomainForm) => {
      return await whitelistService.addToWhitelist(formData.domain, formData.notes, 'user');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['whitelist-domains'] });
      setNewDomainForm({
        domain: "",
        category: "external",
        notes: "",
        isWildcard: false
      });
      toast({
        title: "Domain Added",
        description: `${newDomainForm.domain} has been added to whitelist`
      });
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to add domain to whitelist";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  // Mutation for updating domain
  const updateMutation = useMutation({
    mutationFn: async ({ domain, updates }: { domain: string; updates: Record<string, unknown> }) => {
      return await whitelistService.updateWhitelistDomain(domain, updates);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['whitelist-domains'] });
      setEditingDomain(null);
      toast({
        title: "Domain Updated",
        description: "Domain has been updated successfully"
      });
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to update domain";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  // Mutation for removing domain
  const removeMutation = useMutation({
    mutationFn: async (domain: string) => {
      await whitelistService.removeFromWhitelist(domain);
    },
    onSuccess: (_, domain) => {
      queryClient.invalidateQueries({ queryKey: ['whitelist-domains'] });
      toast({
        title: "Domain Removed",
        description: `${domain} has been removed from whitelist`
      });
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to remove domain from whitelist";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    }
  });

  const handleAddDomain = () => {
    if (!newDomainForm.domain.trim()) {
      toast({
        title: "Invalid domain",
        description: "Please enter a valid domain",
        variant: "destructive"
      });
      return;
    }

    addMutation.mutate(newDomainForm);
  };

  const handleRemoveDomain = (domain: string) => {
    if (confirm(`Are you sure you want to remove ${domain} from the whitelist?`)) {
      removeMutation.mutate(domain);
    }
  };

  const handleEditDomain = (domain: DomainData) => {
    setEditingDomain(domain);
  };

  const handleSaveEdit = () => {
    if (!editingDomain) return;

    const updates = {
      notes: editingDomain.notes,
      category: editingDomain.category,
      isActive: editingDomain.isActive,
      updatedBy: 'user'
    };

    updateMutation.mutate({ domain: editingDomain.domain, updates });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'company_service': return 'bg-blue-100 text-blue-800';
      case 'cloud_storage': return 'bg-green-100 text-green-800';
      case 'pdf_service': return 'bg-purple-100 text-purple-800';
      case 'government': return 'bg-red-100 text-red-800';
      case 'banking': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'CRITICAL': return 'bg-red-100 text-red-800';
      case 'HIGH': return 'bg-orange-100 text-orange-800';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
      case 'LOW': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadge = () => {
    switch (dbStatus) {
      case 'connected':
        return <Badge variant="default" className="bg-green-500">Connected</Badge>;
      case 'mock':
        return <Badge variant="secondary" className="bg-yellow-500 text-white">Mock Data</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      default:
        return <Badge variant="secondary">Connecting...</Badge>;
    }
  };

  const getStatusIcon = () => {
    switch (dbStatus) {
      case 'connected':
        return <Database className="h-4 w-4 text-green-500" />;
      case 'mock':
        return <Shield className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Loader2 className="h-4 w-4 animate-spin" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Database Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getStatusIcon()}
            Database Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            {getStatusBadge()}
            <span className="text-sm text-muted-foreground">
              {whitelistData ? `${whitelistData.total} domains in ${dbStatus === 'mock' ? 'mock data' : 'database'}` : 'Loading...'}
            </span>
          </div>
          {dbStatus === 'mock' && (
            <p className="text-xs text-muted-foreground mt-2">
              💡 Start the API server to connect to the real database
            </p>
          )}
        </CardContent>
      </Card>

      {/* Add New Domain */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Domain
          </CardTitle>
          <CardDescription>
            Add domains to the whitelist. Use wildcards like *.pricol.com for pattern matching.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="domain">Domain</Label>
              <Input
                id="domain"
                placeholder="example.com or *.pricol.com"
                value={newDomainForm.domain}
                onChange={(e) => setNewDomainForm(prev => ({ ...prev, domain: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleAddDomain()}
                disabled={addMutation.isPending}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={newDomainForm.category}
                onValueChange={(value) => setNewDomainForm(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="external">External</SelectItem>
                  <SelectItem value="company_service">Company Service</SelectItem>
                  <SelectItem value="cloud_storage">Cloud Storage</SelectItem>
                  <SelectItem value="pdf_service">PDF Service</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="banking">Banking</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="tech_service">Tech Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Optional notes about this domain"
                value={newDomainForm.notes}
                onChange={(e) => setNewDomainForm(prev => ({ ...prev, notes: e.target.value }))}
                rows={2}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="wildcard"
                  checked={newDomainForm.isWildcard}
                  onCheckedChange={(checked) => setNewDomainForm(prev => ({ ...prev, isWildcard: checked }))}
                />
                <Label htmlFor="wildcard">Wildcard Domain</Label>
              </div>
              <div>
                <Label htmlFor="expires">Expires At (Optional)</Label>
                <Input
                  id="expires"
                  type="datetime-local"
                  value={newDomainForm.expiresAt || ''}
                  onChange={(e) => setNewDomainForm(prev => ({ ...prev, expiresAt: e.target.value }))}
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleAddDomain} 
            disabled={addMutation.isPending || !newDomainForm.domain.trim()}
            className="w-full"
          >
            {addMutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Plus className="h-4 w-4 mr-2" />
            )}
            Add Domain
          </Button>
        </CardContent>
      </Card>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Domains</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search domains..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Domain List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Whitelisted Domains
            {whitelistData && (
              <Badge variant="outline">{whitelistData.total}</Badge>
            )}
          </CardTitle>
          <CardDescription>
            Manage your whitelisted domains. Click edit to modify details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center p-8 text-red-500">
              <AlertTriangle className="h-8 w-8 mr-2" />
              Failed to load domains
            </div>
          ) : whitelistData?.domains.length === 0 ? (
            <div className="text-center p-8 text-muted-foreground">
              No domains found in whitelist
            </div>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {whitelistData?.domains.map((domain) => (
                <div key={domain.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono">
                        {domain.domain}
                        {domain.isWildcard && <Star className="h-3 w-3 ml-1" />}
                      </Badge>
                      <Badge className={getCategoryColor(domain.category)}>
                        {domain.category}
                      </Badge>
                      <Badge className={getRiskLevelColor(domain.riskLevel)}>
                        {domain.riskLevel}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {editingDomain?.id === domain.id ? (
                        <>
                          <Button
                            size="sm"
                            onClick={handleSaveEdit}
                            disabled={updateMutation.isPending}
                          >
                            {updateMutation.isPending ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <Save className="h-3 w-3" />
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingDomain(null)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditDomain(domain)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleRemoveDomain(domain.domain)}
                            disabled={removeMutation.isPending}
                          >
                            {removeMutation.isPending ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <Trash2 className="h-3 w-3" />
                            )}
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {editingDomain?.id === domain.id ? (
                    <div className="space-y-2">
                      <div>
                        <Label>Notes</Label>
                        <Textarea
                          value={editingDomain.notes || ''}
                          onChange={(e) => setEditingDomain(prev => prev ? { ...prev, notes: e.target.value } : null)}
                          rows={2}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={editingDomain.isActive}
                          onCheckedChange={(checked) => setEditingDomain(prev => prev ? { ...prev, isActive: checked } : null)}
                        />
                        <Label>Active</Label>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {domain.notes && <p>{domain.notes}</p>}
                      <p>Added: {new Date(domain.createdAt).toLocaleDateString()}</p>
                      {domain.expiresAt && (
                        <p>Expires: {new Date(domain.expiresAt).toLocaleDateString()}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
