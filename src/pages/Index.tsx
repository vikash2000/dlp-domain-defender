import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Database, Search, Logs, Upload, Filter } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { DLPLogStream } from "@/components/DLPLogStream";
import { SecurityScenarios } from "@/components/SecurityScenarios";
import { DLPMetrics } from "@/components/DLPMetrics";
import { LogAnalytics } from "@/components/LogAnalytics";
import { FileUpload } from "@/components/FileUpload";
import { AdvancedFiltering, FilterConfig } from "@/components/AdvancedFiltering";
import { dlpService } from "@/services/dlpService";
import { WhitelistManager } from "@/components/WhitelistManager";
import { WindowsServerAuth } from "@/components/WindowsServerAuth";
import { isWindowsServerConfigured } from "@/config/windowsServer";

const Index = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [alertCount, setAlertCount] = useState(0);
  const [uploadedLogs, setUploadedLogs] = useState<any[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterConfig>({
    searchText: "",
    excludeInternalEmails: true,
    excludeAllowedDomains: true,
    excludeExchangeSystem: true,
    excludeCloudStorage: true,
    showSuspiciousOnly: false
  });
  const [windowsServerAuthenticated, setWindowsServerAuthenticated] = useState(false);

  const { data: dlpStats } = useQuery({
    queryKey: ['dlp-stats'],
    queryFn: dlpService.getDLPStats,
    refetchInterval: 5000,
  });

  const { data: securityMetrics } = useQuery({
    queryKey: ['security-metrics'],
    queryFn: dlpService.getSecurityMetrics,
    refetchInterval: 10000,
  });

  useEffect(() => {
    if (dlpStats?.criticalAlerts) {
      setAlertCount(dlpStats.criticalAlerts);
    }
  }, [dlpStats]);

  const handleFilesProcessed = (logs: any[]) => {
    setUploadedLogs(logs);
    console.log("Processed logs:", logs);
  };

  const handleFilterChange = (filters: FilterConfig) => {
    setActiveFilters(filters);
    console.log("Active filters:", filters);
  };

  const handleWindowsServerAuthSuccess = () => {
    setWindowsServerAuthenticated(true);
    console.log("Windows server authentication successful");
  };

  const handleWindowsServerAuthFailure = (error: string) => {
    setWindowsServerAuthenticated(false);
    console.error("Windows server authentication failed:", error);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              DLP Analysis Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Advanced Data Loss Prevention monitoring with file processing and suspicious activity detection
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant={isStreaming ? "default" : "secondary"}>
              {isStreaming ? "Live" : "Paused"}
            </Badge>
            <Button
              onClick={() => setIsStreaming(!isStreaming)}
              variant={isStreaming ? "destructive" : "default"}
            >
              {isStreaming ? "Stop Monitoring" : "Start Monitoring"}
            </Button>
          </div>
        </div>

        {/* Critical Alerts */}
        {alertCount > 0 && (
          <Alert variant="destructive">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              {alertCount} critical security alerts detected. Immediate attention required.
            </AlertDescription>
          </Alert>
        )}

        {/* Upload Status */}
        {uploadedLogs.length > 0 && (
          <Alert>
            <Upload className="h-4 w-4" />
            <AlertDescription>
              Successfully processed {uploadedLogs.length} log entries from uploaded files.
            </AlertDescription>
          </Alert>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dlpStats?.activePolicies || 24}</div>
              <p className="text-xs text-muted-foreground">+2 from last hour</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blocked Events</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dlpStats?.blockedEvents || 156}</div>
              <p className="text-xs text-muted-foreground">+12 from last hour</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{dlpStats?.riskScore || 7.2}</div>
              <p className="text-xs text-muted-foreground">Medium risk level</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processed Files</CardTitle>
              <Logs className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{uploadedLogs.length}</div>
              <p className="text-xs text-muted-foreground">log entries</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="upload">File Upload</TabsTrigger>
            <TabsTrigger value="filtering">Advanced Filtering</TabsTrigger>
            <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
            <TabsTrigger value="logs">Real-time Logs</TabsTrigger>
            <TabsTrigger value="scenarios">Security Scenarios</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <FileUpload onFilesProcessed={handleFilesProcessed} />
          </TabsContent>

          <TabsContent value="filtering" className="space-y-4">
            <AdvancedFiltering onFilterChange={handleFilterChange} />
          </TabsContent>

          <TabsContent value="whitelist" className="space-y-4">
            <WhitelistManager />
          </TabsContent>

          <TabsContent value="auth" className="space-y-4">
            <div className="flex justify-center">
              <WindowsServerAuth 
                onAuthenticationSuccess={handleWindowsServerAuthSuccess}
                onAuthenticationFailure={handleWindowsServerAuthFailure}
              />
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Live DLP Event Stream</CardTitle>
                <CardDescription>
                  Real-time monitoring of data loss prevention events and security incidents
                </CardDescription>
                {isWindowsServerConfigured() && (
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant={windowsServerAuthenticated ? "default" : "secondary"}>
                      {windowsServerAuthenticated ? "Windows Server Connected" : "Windows Server Disconnected"}
                    </Badge>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <DLPLogStream isStreaming={isStreaming} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-4">
            <SecurityScenarios />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <LogAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
