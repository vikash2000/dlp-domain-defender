// Windows Server Configuration for DLP Log Extraction
export const windowsServerConfig = {
  // Server Configuration
  serverUrl: import.meta.env.VITE_WINDOWS_SERVER_URL || 'https://10.90.10.164:4343/officescan/console/html/cgi/cgiChkMasterPwd.exe',
  username: import.meta.env.VITE_WINDOWS_SERVER_USERNAME || '',
  password: import.meta.env.VITE_WINDOWS_SERVER_PASSWORD || '',
  
  // Report Configuration - OfficeScan specific endpoints
  reportEndpoint: import.meta.env.VITE_WINDOWS_SERVER_REPORT_ENDPOINT || '/officescan/console/html/cgi/cgiReport.exe',
  reportFormat: import.meta.env.VITE_WINDOWS_SERVER_REPORT_FORMAT || 'json',
  
  // Session Configuration
  sessionTimeout: parseInt(import.meta.env.VITE_WINDOWS_SERVER_SESSION_TIMEOUT || '3600000', 10), // 1 hour default
  
  // Log Fetching Configuration
  fetchInterval: parseInt(import.meta.env.VITE_WINDOWS_SERVER_FETCH_INTERVAL || '300000', 10), // 5 minutes default
  maxLogsPerRequest: parseInt(import.meta.env.VITE_WINDOWS_SERVER_MAX_LOGS || '1000', 10),
  
  // Authentication Method - OfficeScan uses form-based auth
  authMethod: import.meta.env.VITE_WINDOWS_SERVER_AUTH_METHOD || 'form', // 'form', 'basic', 'token'
  
  // OfficeScan specific parameters
  defaultReportParams: {
    reportType: 'DLP',
    includeDetails: true,
    includeMetadata: true,
    // OfficeScan specific parameters
    reportCategory: 'DLP',
    reportSubCategory: 'DataLossPrevention'
  }
};

// Helper function to check if Windows server is configured
export const isWindowsServerConfigured = (): boolean => {
  return !!(windowsServerConfig.serverUrl && 
           windowsServerConfig.username && 
           windowsServerConfig.password);
};

// Helper function to get Windows server status
export const getWindowsServerStatus = () => {
  return {
    configured: isWindowsServerConfigured(),
    serverUrl: windowsServerConfig.serverUrl,
    username: windowsServerConfig.username ? '***configured***' : 'not configured',
    reportEndpoint: windowsServerConfig.reportEndpoint,
    authMethod: windowsServerConfig.authMethod
  };
}; 