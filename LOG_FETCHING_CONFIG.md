# Log Fetching Configuration Guide

## Overview
This guide shows you exactly where to change settings to make the application fetch logs from a server instead of using mock data.

## 🔧 **Step 1: Create Environment File**

Create a `.env` file in the root directory with these settings:

```env
# Server Configuration
VITE_API_BASE_URL=http://your-server-url/api
VITE_USE_MOCK_DATA=false

# Log Fetching Settings
VITE_ENABLE_REALTIME_LOGS=true
VITE_REALTIME_LOGS_INTERVAL=3000
VITE_HISTORICAL_LOGS_LIMIT=100

# Apex One Integration (if using Apex One)
VITE_APEX_ONE_SERVER_URL=https://your-apex-one-server.com
VITE_APEX_ONE_API_KEY=your-api-key
VITE_APEX_ONE_USERNAME=your-username
VITE_APEX_ONE_PASSWORD=your-password
```

## 🔧 **Step 2: Key Files Modified**

### **1. `src/components/DLPLogStream.tsx`**
- **What changed**: Now fetches real-time logs from server
- **Key changes**:
  - Added server configuration import
  - Added error handling and loading states
  - Uses `dlpService.getRealTimeLogs()` instead of `generateMockLogs()`
  - Automatic fallback to mock data if server fails

### **2. `src/components/LogAnalytics.tsx`**
- **What changed**: Now fetches analytics data from server
- **Key changes**:
  - Added server API calls for threats and policy violations
  - Added loading and error states
  - Fetches from `/analytics/threats` and `/analytics/policy-violations` endpoints

### **3. `src/services/dlpService.ts`**
- **What changed**: Added real server API methods
- **Key changes**:
  - `getRealTimeLogs()` - Fetches real-time logs
  - `getHistoricalLogs()` - Fetches historical logs
  - Automatic fallback to mock data on server errors

## 🔧 **Step 3: Server API Endpoints Required**

Your server must implement these endpoints:

### **Real-time Logs**
```
GET /api/dlp/logs/realtime
Response: { logs: DLPLogEntry[] }
```

### **Historical Logs**
```
GET /api/dlp/logs/historical?limit=100
Response: { logs: DLPLogEntry[] }
```

### **Analytics Data**
```
GET /api/analytics/threats
Response: { threats: ThreatData[] }

GET /api/analytics/policy-violations
Response: { violations: PolicyViolation[] }
```

### **DLP Statistics**
```
GET /api/dlp/stats
Response: DLPStats
```

### **Security Metrics**
```
GET /api/security/metrics
Response: SecurityMetrics
```

## 🔧 **Step 4: Switching Between Mock and Real Data**

### **To use mock data (development):**
```env
VITE_USE_MOCK_DATA=true
# or simply don't set VITE_API_BASE_URL
```

### **To use real server data:**
```env
VITE_USE_MOCK_DATA=false
VITE_API_BASE_URL=http://your-server-url/api
```

## 🔧 **Step 5: Testing the Configuration**

### **1. Check Server Availability**
```typescript
import { isServerAvailable } from '@/config/server';

const serverAvailable = await isServerAvailable();
console.log('Server available:', serverAvailable);
```

### **2. Test Log Fetching**
```typescript
import { dlpService } from '@/services/dlpService';

// Test real-time logs
const realTimeLogs = await dlpService.getRealTimeLogs();
console.log('Real-time logs:', realTimeLogs);

// Test historical logs
const historicalLogs = await dlpService.getHistoricalLogs(50);
console.log('Historical logs:', historicalLogs);
```

## 🔧 **Step 6: Error Handling**

The application includes automatic error handling:

1. **Server Unavailable**: Falls back to mock data
2. **Network Errors**: Shows error messages to user
3. **API Errors**: Logs errors to console and continues with fallback
4. **Loading States**: Shows loading indicators during API calls

## 🔧 **Step 7: Configuration Options**

### **Polling Intervals**
```env
VITE_REALTIME_LOGS_INTERVAL=3000    # 3 seconds
VITE_DLP_STATS_INTERVAL=5000        # 5 seconds
VITE_SECURITY_METRICS_INTERVAL=10000 # 10 seconds
```

### **Log Limits**
```env
VITE_HISTORICAL_LOGS_LIMIT=100      # Max historical logs to fetch
```

### **Feature Flags**
```env
VITE_ENABLE_REALTIME_LOGS=true      # Enable/disable real-time log streaming
VITE_USE_MOCK_DATA=false            # Use mock data instead of server
```

## 🔧 **Step 8: Troubleshooting**

### **Common Issues:**

1. **"Failed to fetch logs from server"**
   - Check if server is running
   - Verify `VITE_API_BASE_URL` is correct
   - Check server logs for errors

2. **"Using fallback data"**
   - Server is unavailable or returning errors
   - Application will continue with mock data

3. **No logs appearing**
   - Check if `isStreaming` is true
   - Verify server endpoints are working
   - Check browser console for errors

### **Debug Steps:**
1. Open browser developer tools
2. Check Network tab for API calls
3. Check Console tab for error messages
4. Verify environment variables are loaded correctly 