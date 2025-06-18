// Server configuration for DLP Domain Defender
export const serverConfig = {
  // API Configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  
  // Feature flags
  useMockData: import.meta.env.VITE_USE_MOCK_DATA === 'true' || !import.meta.env.VITE_API_BASE_URL,
  enableRealTimeLogs: import.meta.env.VITE_ENABLE_REALTIME_LOGS !== 'false',
  
  // Authentication Configuration
  authentication: {
    enabled: import.meta.env.VITE_USE_API_AUTH === 'true',
    username: import.meta.env.VITE_API_USERNAME || '',
    password: import.meta.env.VITE_API_PASSWORD || '',
    token: import.meta.env.VITE_API_TOKEN || '',
    type: import.meta.env.VITE_API_TOKEN ? 'bearer' : 'basic'
  },
  
  // Apex One Integration
  apexOne: {
    serverUrl: import.meta.env.VITE_APEX_ONE_SERVER_URL || 'https://your-apex-one-server',
    apiKey: import.meta.env.VITE_APEX_ONE_API_KEY || '',
    username: import.meta.env.VITE_APEX_ONE_USERNAME || '',
    password: import.meta.env.VITE_APEX_ONE_PASSWORD || '',
    logInterval: parseInt(import.meta.env.VITE_APEX_ONE_LOG_INTERVAL || '5', 10)
  },
  
  // Database Configuration
  database: {
    url: import.meta.env.VITE_DATABASE_URL || 'file:./dev.db',
    enablePrisma: import.meta.env.VITE_ENABLE_PRISMA !== 'false'
  },
  
  // Polling intervals (in milliseconds)
  intervals: {
    dlpStats: parseInt(import.meta.env.VITE_DLP_STATS_INTERVAL || '5000', 10),
    securityMetrics: parseInt(import.meta.env.VITE_SECURITY_METRICS_INTERVAL || '10000', 10),
    realTimeLogs: parseInt(import.meta.env.VITE_REALTIME_LOGS_INTERVAL || '3000', 10)
  },
  
  // API Endpoints
  endpoints: {
    dlpStats: '/dlp/stats',
    securityMetrics: '/security/metrics',
    realTimeLogs: '/dlp/logs/realtime',
    historicalLogs: '/dlp/logs/historical',
    whitelist: '/whitelist',
    suspiciousActivity: '/suspicious-activity'
  }
};

// Helper function to check if server is available
export const isServerAvailable = async (): Promise<boolean> => {
  if (serverConfig.useMockData) return false;
  
  try {
    const response = await fetch(`${serverConfig.apiBaseUrl}/health`);
    return response.ok;
  } catch {
    return false;
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${serverConfig.apiBaseUrl}${endpoint}`;
}; 