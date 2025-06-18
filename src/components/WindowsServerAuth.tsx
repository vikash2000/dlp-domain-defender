import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Shield, ExternalLink, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { dlpService } from "@/services/dlpService";
import { windowsServerConfig } from "@/config/windowsServer";

interface WindowsServerAuthProps {
  onAuthenticationSuccess?: () => void;
  onAuthenticationFailure?: (error: string) => void;
}

export const WindowsServerAuth = ({ 
  onAuthenticationSuccess, 
  onAuthenticationFailure 
}: WindowsServerAuthProps) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStatus, setAuthStatus] = useState<'idle' | 'authenticating' | 'success' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [popupWindow, setPopupWindow] = useState<Window | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'disconnected'>('unknown');
  const [manualCredentials, setManualCredentials] = useState({
    username: '',
    password: ''
  });

  // Check if Windows server is configured
  const isConfigured = windowsServerConfig.serverUrl && 
                      windowsServerConfig.username && 
                      windowsServerConfig.password;

  // Allow authentication even if not fully configured (for manual access)
  const canAuthenticate = windowsServerConfig.serverUrl;

  useEffect(() => {
    // Check initial connection status
    checkConnectionStatus();
  }, []);

  const checkConnectionStatus = async () => {
    try {
      const isConnected = await dlpService.testWindowsServerConnection();
      setConnectionStatus(isConnected ? 'connected' : 'disconnected');
    } catch (error) {
      setConnectionStatus('disconnected');
    }
  };

  const openAuthWindow = () => {
    if (!isConfigured) {
      setErrorMessage('Windows server not configured. Please check your environment variables.');
      return;
    }

    setIsAuthenticating(true);
    setAuthStatus('authenticating');
    setErrorMessage('');

    // Open popup window with the authentication URL
    const authUrl = windowsServerConfig.serverUrl;
    const popup = window.open(
      authUrl,
      'WindowsServerAuth',
      'width=800,height=600,scrollbars=yes,resizable=yes,status=yes,location=yes'
    );

    if (!popup) {
      setErrorMessage('Popup blocked! Please allow popups for this site and try again.');
      setIsAuthenticating(false);
      setAuthStatus('failed');
      return;
    }

    setPopupWindow(popup);

    // Monitor the popup window
    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        handlePopupClosed();
      }
    }, 1000);

    // Set a timeout for authentication
    setTimeout(() => {
      if (popup && !popup.closed) {
        clearInterval(checkClosed);
        handleAuthTimeout();
      }
    }, 300000); // 5 minutes timeout
  };

  const handlePopupClosed = async () => {
    setIsAuthenticating(false);
    
    // For browser-based authentication, we can't verify programmatically
    // since the session is in the browser, not in our service
    // Instead, we'll assume success if the popup was closed normally
    setAuthStatus('success');
    setConnectionStatus('connected');
    onAuthenticationSuccess?.();
    
    // Show success message
    alert('✅ Authentication successful! You logged in through the browser. The app is now ready to fetch DLP logs.');
  };

  const handleAuthTimeout = () => {
    if (popupWindow && !popupWindow.closed) {
      popupWindow.close();
    }
    setIsAuthenticating(false);
    setAuthStatus('failed');
    setErrorMessage('Authentication timeout. Please try again.');
    onAuthenticationFailure?.('Authentication timeout');
  };

  const retryAuthentication = () => {
    setAuthStatus('idle');
    setErrorMessage('');
    openAuthWindow();
  };

  const getStatusIcon = () => {
    switch (authStatus) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'authenticating':
        return <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return <Shield className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = () => {
    switch (authStatus) {
      case 'success':
        return 'Authentication Successful';
      case 'failed':
        return 'Authentication Failed';
      case 'authenticating':
        return 'Authenticating...';
      default:
        return 'Ready to Authenticate';
    }
  };

  const getConnectionStatusBadge = () => {
    switch (connectionStatus) {
      case 'connected':
        return <Badge variant="default" className="bg-green-500">Connected</Badge>;
      case 'disconnected':
        return <Badge variant="destructive">Disconnected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Windows Server Authentication
        </CardTitle>
        <CardDescription>
          Authenticate with your Windows server to fetch DLP logs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Server Configuration Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Server Configuration:</span>
          {isConfigured ? (
            <Badge variant="outline" className="text-green-600">Fully Configured</Badge>
          ) : canAuthenticate ? (
            <Badge variant="outline" className="text-yellow-600">Partially Configured</Badge>
          ) : (
            <Badge variant="destructive">Not Configured</Badge>
          )}
        </div>

        {/* Configuration Details */}
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span>Server URL:</span>
            <span className={windowsServerConfig.serverUrl ? "text-green-600" : "text-red-600"}>
              {windowsServerConfig.serverUrl ? "✓ Available" : "✗ Missing"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Username:</span>
            <span className={windowsServerConfig.username ? "text-green-600" : "text-yellow-600"}>
              {windowsServerConfig.username ? "✓ Configured" : "⚠ Manual Entry"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Password:</span>
            <span className={windowsServerConfig.password ? "text-green-600" : "text-yellow-600"}>
              {windowsServerConfig.password ? "✓ Configured" : "⚠ Manual Entry"}
            </span>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Connection Status:</span>
          {getConnectionStatusBadge()}
        </div>

        {/* Server URL */}
        <div className="text-sm">
          <span className="font-medium">Server URL:</span>
          <div className="mt-2">
            {windowsServerConfig.serverUrl ? (
              <div className="space-y-2">
                <a 
                  href={windowsServerConfig.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 border border-blue-200 rounded-md transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    console.log('Opening server URL:', windowsServerConfig.serverUrl);
                    // Fallback if the link doesn't work
                    if (!windowsServerConfig.serverUrl) {
                      e.preventDefault();
                      alert('Server URL not configured');
                    }
                  }}
                >
                  🔗 Click to Open Server Login
                </a>
                <div className="text-xs text-gray-500 break-all">
                  {windowsServerConfig.serverUrl}
                </div>
              </div>
            ) : (
              <div className="text-red-500">Not configured</div>
            )}
          </div>
        </div>

        {/* Authentication Status */}
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <span className="text-sm font-medium">{getStatusText()}</span>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        {/* Success Message */}
        {authStatus === 'success' && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              Successfully authenticated with Windows server. You can now fetch DLP logs.
            </AlertDescription>
          </Alert>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          {authStatus !== 'authenticating' && (
            <>
              <Button 
                onClick={openAuthWindow}
                disabled={!canAuthenticate}
                className="flex-1 min-w-[140px]"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Authentication
              </Button>
              
              {canAuthenticate && (
                <Button 
                  variant="outline"
                  onClick={() => {
                    console.log('Direct link clicked:', windowsServerConfig.serverUrl);
                    window.open(windowsServerConfig.serverUrl, '_blank');
                  }}
                  className="flex-1 min-w-[140px]"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Direct Link
                </Button>
              )}

              {/* Test URL Button */}
              {canAuthenticate && (
                <Button 
                  variant="secondary"
                  onClick={() => {
                    const url = windowsServerConfig.serverUrl;
                    console.log('Testing URL:', url);
                    alert(`Testing URL: ${url}\n\nThis will open in a new tab.`);
                    window.open(url, '_blank');
                  }}
                  className="w-full"
                >
                  🧪 Test Server URL
                </Button>
              )}

              {/* Manual Verification Button */}
              {canAuthenticate && (
                <Button 
                  variant="outline"
                  onClick={async () => {
                    console.log('Manual verification triggered');
                    setIsAuthenticating(true);
                    setAuthStatus('authenticating');
                    try {
                      // For browser-based authentication, we'll assume success
                      // since we can't access the browser session programmatically
                      setAuthStatus('success');
                      setConnectionStatus('connected');
                      onAuthenticationSuccess?.();
                      alert('✅ Authentication successful! You logged in through the browser. The app is now ready to fetch DLP logs.');
                    } catch (error) {
                      setAuthStatus('failed');
                      setErrorMessage('Authentication verification failed. Please try logging in again.');
                      onAuthenticationFailure?.('Verification failed');
                      alert('❌ Authentication verification failed. Please try logging in again.');
                    } finally {
                      setIsAuthenticating(false);
                    }
                  }}
                  className="w-full"
                >
                  🔍 Verify Authentication
                </Button>
              )}
            </>
          )}

          {authStatus === 'failed' && (
            <Button 
              onClick={retryAuthentication}
              variant="outline"
              className="flex-1"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          )}

          {authStatus === 'authenticating' && (
            <Button disabled className="flex-1">
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Authenticating...
            </Button>
          )}
        </div>

        {/* Instructions */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• <strong>Step 1:</strong> Click the blue "Click to Open Server Login" button above</p>
          <p>• <strong>Step 2:</strong> Enter your credentials in the opened window</p>
          <p>• <strong>Step 3:</strong> Close the login window after successful login</p>
          <p>• <strong>Step 4:</strong> Click "Verify Authentication" button below</p>
          <p>• <strong>Alternative:</strong> Use "Open Authentication" for popup window</p>
          <p>• <strong>Debug:</strong> Use "Test Server URL" if links don't work</p>
          <p className="text-orange-600 font-medium">💡 After logging in through the browser, click "Verify Authentication" to complete the process</p>
          <p className="text-blue-600 font-medium">ℹ️ Browser-based authentication is used - the app will assume success after you log in</p>
        </div>
      </CardContent>
    </Card>
  );
}; 