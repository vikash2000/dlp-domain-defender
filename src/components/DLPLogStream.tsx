
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, CheckCircle, XCircle, Clock } from "lucide-react";
import { dlpService, DLPLogEntry } from "@/services/dlpService";
import { serverConfig } from "@/config/server";
import { isWindowsServerConfigured } from "@/config/windowsServer";

interface DLPLogStreamProps {
  isStreaming: boolean;
}

export const DLPLogStream = ({ isStreaming }: DLPLogStreamProps) => {
  const [logs, setLogs] = useState<DLPLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking...');

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const isAuth = dlpService.getAuthenticationStatus();
      const serverStatus = dlpService.getWindowsServerStatus();
      setAuthStatus(isAuth);
      setConnectionStatus(
        serverStatus.connected 
          ? `Connected to ${serverStatus.server?.split('/')[2] || 'OfficeScan'}`
          : 'Not connected'
      );
      console.log('Auth status:', isAuth, 'Server status:', serverStatus);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isStreaming) return;

    const fetchLogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('DLPLogStream: Fetching logs...');
        console.log('Windows server configured:', isWindowsServerConfigured());
        console.log('Authentication status:', dlpService.getAuthenticationStatus());
        
        // Fetch real logs from OfficeScan or mock data
        const realTimeLogs = await dlpService.getRealTimeLogs();
        console.log('DLPLogStream: Received logs:', realTimeLogs.length);
        
        setLogs(prev => [...realTimeLogs, ...prev].slice(0, 100));
        
        // Update auth status
        const isAuth = dlpService.getAuthenticationStatus();
        const serverStatus = dlpService.getWindowsServerStatus();
        setAuthStatus(isAuth);
        setConnectionStatus(
          serverStatus.connected 
            ? `Connected to ${serverStatus.server?.split('/')[2] || 'OfficeScan'} (Last sync: ${new Date().toLocaleTimeString()})`
            : 'Not connected'
        );
      } catch (err) {
        console.error('Failed to fetch logs:', err);
        setError('Failed to fetch logs from OfficeScan server');
      } finally {
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchLogs();

    // Set up interval for real-time updates
    const interval = setInterval(fetchLogs, serverConfig.intervals.realTimeLogs);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-4">
      {/* Connection Status */}
      <Alert>
        <div className="flex items-center gap-2">
          {authStatus ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <XCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription>
            <strong>Connection Status:</strong> {connectionStatus}
            {isWindowsServerConfigured() && (
              <span className="ml-2 text-sm text-muted-foreground">
                (OfficeScan Server Configured)
              </span>
            )}
          </AlertDescription>
        </div>
      </Alert>

      {!isStreaming && (
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Log streaming is paused. Click "Start Monitoring" to begin real-time analysis.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}

      {isLoading && (
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertDescription>
            Fetching latest logs from OfficeScan server...
          </AlertDescription>
        </Alert>
      )}
      
      <ScrollArea className="h-[600px] w-full border rounded-md p-4">
        <div className="space-y-2">
          {logs.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              {isStreaming ? "Waiting for log entries..." : "No logs to display"}
              {isWindowsServerConfigured() && !authStatus && (
                <p className="text-sm mt-2">
                  Go to Authentication tab to connect to your OfficeScan server
                </p>
              )}
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between p-3 border rounded-lg bg-card"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={getSeverityColor(log.severity)}>
                      {log.severity.toUpperCase()}
                    </Badge>
                    <span className="font-medium">{log.type}</span>
                    <span className="text-sm text-muted-foreground">
                      {log.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm">{log.message}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>User: {log.user}</span>
                    <span>Source: {log.source}</span>
                    <span>Policy: {log.policy}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{log.action}</div>
                  <div className="text-xs text-muted-foreground">Risk: {log.riskScore}/10</div>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
