# Windows Server DLP Log Configuration Guide

## Overview
This guide shows you how to configure the application to fetch DLP logs from a Windows server where you have login access to view reports.

## 🔧 **Step 1: Environment Configuration**

Create a `.env` file with Windows server settings:

```env
# Windows Server Configuration
VITE_WINDOWS_SERVER_URL=https://your-windows-server.com
VITE_WINDOWS_SERVER_USERNAME=your-username
VITE_WINDOWS_SERVER_PASSWORD=your-password

# Report Configuration
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/reports/dlp
VITE_WINDOWS_SERVER_REPORT_FORMAT=json
VITE_WINDOWS_SERVER_AUTH_METHOD=form

# Session Configuration
VITE_WINDOWS_SERVER_SESSION_TIMEOUT=3600000
VITE_WINDOWS_SERVER_FETCH_INTERVAL=300000
VITE_WINDOWS_SERVER_MAX_LOGS=1000

# General Settings
VITE_USE_MOCK_DATA=false
VITE_ENABLE_REALTIME_LOGS=true
```

## 🔧 **Step 2: Authentication Methods**

### **Form-based Authentication (Most Common)**
```env
VITE_WINDOWS_SERVER_AUTH_METHOD=form
```
- Used for web-based login forms
- Sends username/password as form data
- Most common for Windows servers with web interfaces

### **Basic Authentication**
```env
VITE_WINDOWS_SERVER_AUTH_METHOD=basic
```
- Uses HTTP Basic Authentication
- Sends credentials in Authorization header
- Used for API-based authentication

## 🔧 **Step 3: Report Endpoint Configuration**

### **Common Report Endpoints:**
```env
# Standard DLP reports
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/reports/dlp

# Security reports
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/security/reports

# Event logs
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/logs/events

# Custom endpoint
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/api/dlp/logs
```

### **Report Formats:**
```env
# JSON format (recommended)
VITE_WINDOWS_SERVER_REPORT_FORMAT=json

# XML format
VITE_WINDOWS_SERVER_REPORT_FORMAT=xml

# CSV format
VITE_WINDOWS_SERVER_REPORT_FORMAT=csv
```

## 🔧 **Step 4: Customizing Log Parsing**

The application includes flexible log parsing that can handle different server formats. You may need to customize the parsing based on your server's report format.

### **Common Log Field Mappings:**

| Application Field | Server Field Names |
|------------------|-------------------|
| `id` | `id`, `logId`, `eventId` |
| `timestamp` | `timestamp`, `date`, `time`, `createdAt` |
| `severity` | `severity`, `level`, `priority` |
| `type` | `type`, `eventType`, `category` |
| `message` | `message`, `description`, `details`, `summary` |
| `user` | `user`, `username`, `userId`, `userName` |
| `source` | `source`, `fileName`, `filePath`, `sourceFile` |
| `policy` | `policy`, `ruleName`, `rule`, `policyName` |
| `action` | `action`, `result`, `status`, `actionTaken` |

## 🔧 **Step 5: Testing the Configuration**

### **1. Test Windows Server Connection**
```typescript
import { dlpService } from '@/services/dlpService';

const isConnected = await dlpService.testWindowsServerConnection();
console.log('Windows server connected:', isConnected);
```

### **2. Test Log Fetching**
```typescript
import { dlpService } from '@/services/dlpService';

// Test recent logs
const recentLogs = await dlpService.getRealTimeLogs();
console.log('Recent logs:', recentLogs);

// Test historical logs
const historicalLogs = await dlpService.getHistoricalLogs(50);
console.log('Historical logs:', historicalLogs);
```

### **3. Check Windows Server Status**
```typescript
import { dlpService } from '@/services/dlpService';

const status = dlpService.getWindowsServerStatus();
console.log('Windows server status:', status);
```

## 🔧 **Step 6: Common Windows Server Scenarios**

### **Scenario 1: Windows Server with Web Interface**
```env
VITE_WINDOWS_SERVER_URL=https://windows-server.company.com
VITE_WINDOWS_SERVER_USERNAME=dlp-user
VITE_WINDOWS_SERVER_PASSWORD=secure-password
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/reports/dlp
VITE_WINDOWS_SERVER_AUTH_METHOD=form
```

### **Scenario 2: Windows Server with API**
```env
VITE_WINDOWS_SERVER_URL=https://api.windows-server.company.com
VITE_WINDOWS_SERVER_USERNAME=api-user
VITE_WINDOWS_SERVER_PASSWORD=api-password
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/api/v1/dlp/logs
VITE_WINDOWS_SERVER_AUTH_METHOD=basic
```

### **Scenario 3: Windows Server with Custom Reports**
```env
VITE_WINDOWS_SERVER_URL=https://reports.company.com
VITE_WINDOWS_SERVER_USERNAME=report-user
VITE_WINDOWS_SERVER_PASSWORD=report-password
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/custom/dlp-report
VITE_WINDOWS_SERVER_AUTH_METHOD=form
```

## 🔧 **Step 7: Troubleshooting**

### **Common Issues:**

1. **"Authentication failed"**
   - Check username and password
   - Verify authentication method
   - Check if server requires additional authentication steps

2. **"Failed to extract session token"**
   - Server may use different token format
   - Check server response format
   - May need to customize token extraction

3. **"No logs found"**
   - Check report endpoint URL
   - Verify report format
   - Check if server returns data in expected format

4. **"Connection timeout"**
   - Check server URL
   - Verify network connectivity
   - Check firewall settings

### **Debug Steps:**

1. **Check Browser Network Tab**
   - Look for login requests
   - Check response headers and cookies
   - Verify report requests

2. **Test with curl or Postman**
   ```bash
   # Test login
   curl -X POST https://your-server.com/login \
     -d "username=your-username&password=your-password" \
     -H "Content-Type: application/x-www-form-urlencoded"

   # Test report endpoint
   curl -X GET https://your-server.com/reports/dlp \
     -H "Authorization: Bearer your-token"
   ```

3. **Check Server Logs**
   - Look for authentication attempts
   - Check for report requests
   - Verify error messages

## 🔧 **Step 8: Customization Examples**

### **Custom Token Extraction**
If your server uses a different token format, you can customize the extraction:

```typescript
// In windowsServerService.ts, modify extractSessionToken method
private extractSessionToken(response: any): string | null {
  // Your custom token extraction logic
  if (response.data && response.data.sessionToken) {
    return response.data.sessionToken;
  }
  
  // Check custom header
  if (response.headers['x-auth-token']) {
    return response.headers['x-auth-token'];
  }
  
  return null;
}
```

### **Custom Log Transformation**
If your server uses different field names:

```typescript
// In windowsServerService.ts, modify transformLogEntry method
private transformLogEntry(record: any, index: number): DLPLogEntry {
  return {
    // Map your server's field names to application fields
    id: record.eventId || record.logId || `log-${Date.now()}-${index}`,
    timestamp: new Date(record.eventTime || record.logDate || Date.now()),
    severity: this.mapSeverity(record.eventLevel || record.priority || 'medium'),
    // ... other fields
  };
}
```

## 🔧 **Step 9: Security Considerations**

### **1. Credential Security**
- Never commit `.env` files to version control
- Use environment-specific credentials
- Consider using service accounts for automation

### **2. Network Security**
- Use HTTPS for all connections
- Verify server certificates
- Consider VPN access if required

### **3. Session Management**
- Implement proper session timeout
- Handle session expiration gracefully
- Log authentication events

## 🔧 **Step 10: Performance Optimization**

### **1. Fetch Intervals**
```env
# Adjust based on your needs
VITE_WINDOWS_SERVER_FETCH_INTERVAL=300000  # 5 minutes
VITE_WINDOWS_SERVER_FETCH_INTERVAL=600000  # 10 minutes
```

### **2. Log Limits**
```env
# Limit number of logs per request
VITE_WINDOWS_SERVER_MAX_LOGS=1000
VITE_WINDOWS_SERVER_MAX_LOGS=500
```

### **3. Session Timeout**
```env
# Session timeout in milliseconds
VITE_WINDOWS_SERVER_SESSION_TIMEOUT=3600000  # 1 hour
VITE_WINDOWS_SERVER_SESSION_TIMEOUT=7200000  # 2 hours
``` 