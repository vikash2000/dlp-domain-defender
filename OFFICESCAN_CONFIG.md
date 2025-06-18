# OfficeScan DLP Log Configuration Guide

## Overview
This guide shows you how to configure the application to work with your OfficeScan Windows server at `https://10.90.10.164:4343/officescan/console/html/cgi/cgiChkMasterPwd.exe`.

## 🔧 **Step 1: Environment Configuration**

Create a `.env` file with your OfficeScan server settings:

```env
# OfficeScan Server Configuration
VITE_WINDOWS_SERVER_URL=https://10.90.10.164:4343/officescan/console/html/cgi/cgiChkMasterPwd.exe
VITE_WINDOWS_SERVER_USERNAME=your-officecan-username
VITE_WINDOWS_SERVER_PASSWORD=your-officecan-password

# OfficeScan Report Configuration
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/officescan/console/html/cgi/cgiReport.exe
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

## 🔧 **Step 2: How the Authentication Works**

### **1. Popup Authentication**
- Click the "Authentication" tab in the application
- Click "Open Authentication" button
- A popup window opens with your OfficeScan login page
- Enter your credentials in the popup
- Close the popup after successful login
- The application automatically verifies authentication

### **2. Automatic Log Fetching**
- Once authenticated, the application can fetch DLP logs
- Logs are automatically fetched every 5 minutes
- Real-time log streaming is enabled
- Historical logs are available for analysis

## 🔧 **Step 3: OfficeScan Specific Configuration**

### **Authentication URL**
```
https://10.90.10.164:4343/officescan/console/html/cgi/cgiChkMasterPwd.exe
```

### **Report Endpoints**
- **DLP Reports**: `/officescan/console/html/cgi/cgiReport.exe`
- **Event Logs**: `/officescan/console/html/cgi/cgiEventLog.exe`
- **Security Reports**: `/officescan/console/html/cgi/cgiSecurityReport.exe`

### **Report Parameters**
```json
{
  "reportType": "DLP",
  "reportCategory": "DLP",
  "reportSubCategory": "DataLossPrevention",
  "includeDetails": true,
  "includeMetadata": true
}
```

## 🔧 **Step 4: Using the Application**

### **1. Start the Application**
```bash
npm run dev
```

### **2. Navigate to Authentication Tab**
- Open the application in your browser
- Click on the "Authentication" tab
- You'll see the Windows Server Authentication card

### **3. Authenticate with OfficeScan**
- Click "Open Authentication" button
- A popup window opens with your OfficeScan login page
- Enter your username and password
- Click login
- Close the popup window after successful login

### **4. Verify Authentication**
- The application will show "Authentication Successful"
- Connection status will show "Connected"
- You can now access the "Real-time Logs" tab

### **5. View DLP Logs**
- Go to the "Real-time Logs" tab
- Click "Start Monitoring" to begin fetching logs
- Logs will be displayed in real-time
- You can also view analytics and security scenarios

## 🔧 **Step 5: Troubleshooting**

### **Common Issues:**

1. **"Popup blocked"**
   - Allow popups for the application domain
   - Try clicking "Open Authentication" again

2. **"Authentication failed"**
   - Check your username and password
   - Verify the OfficeScan server is accessible
   - Check if your account has DLP report access

3. **"Connection timeout"**
   - Check if the OfficeScan server is running
   - Verify network connectivity to `10.90.10.164:4343`
   - Check firewall settings

4. **"No logs found"**
   - Verify your account has DLP report permissions
   - Check if DLP events are being generated
   - Verify the report endpoint is correct

### **Debug Steps:**

1. **Test Server Accessibility**
   ```bash
   # Test if the server is reachable
   curl -k https://10.90.10.164:4343/officescan/console/html/cgi/cgiChkMasterPwd.exe
   ```

2. **Check Browser Console**
   - Open browser developer tools
   - Look for authentication errors
   - Check network requests

3. **Verify Credentials**
   - Try logging in manually to the OfficeScan console
   - Ensure your account has DLP report access
   - Check if your account is not locked

## 🔧 **Step 6: OfficeScan Report Types**

The application is configured to fetch these types of reports:

### **DLP Reports**
- Data Loss Prevention events
- File transfer violations
- Email DLP incidents
- USB device violations

### **Security Reports**
- Malware detections
- Security policy violations
- Threat events
- Compliance violations

### **Event Logs**
- System events
- User activities
- Policy changes
- Administrative actions

## 🔧 **Step 7: Customization**

### **Custom Report Endpoints**
If your OfficeScan installation uses different endpoints:

```env
# Custom DLP report endpoint
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/officescan/console/html/cgi/cgiCustomDLPReport.exe

# Custom event log endpoint
VITE_WINDOWS_SERVER_REPORT_ENDPOINT=/officescan/console/html/cgi/cgiCustomEventLog.exe
```

### **Custom Report Parameters**
You can customize the report parameters in `src/config/windowsServer.ts`:

```typescript
defaultReportParams: {
  reportType: 'DLP',
  reportCategory: 'DLP',
  reportSubCategory: 'DataLossPrevention',
  includeDetails: true,
  includeMetadata: true,
  // Add custom parameters
  customParam1: 'value1',
  customParam2: 'value2'
}
```

## 🔧 **Step 8: Security Considerations**

### **1. Credential Security**
- Never commit `.env` files to version control
- Use environment-specific credentials
- Consider using service accounts for automation

### **2. Network Security**
- The application uses HTTPS for secure communication
- Verify the OfficeScan server certificate
- Consider VPN access if required

### **3. Session Management**
- Sessions timeout after 1 hour by default
- Automatic re-authentication when needed
- Secure session token handling

## 🔧 **Step 9: Performance Optimization**

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

## 🔧 **Step 10: Testing**

### **1. Test Authentication**
```typescript
import { dlpService } from '@/services/dlpService';

const isConnected = await dlpService.testWindowsServerConnection();
console.log('OfficeScan connected:', isConnected);
```

### **2. Test Log Fetching**
```typescript
import { dlpService } from '@/services/dlpService';

// Test recent logs
const recentLogs = await dlpService.getRealTimeLogs();
console.log('Recent OfficeScan logs:', recentLogs);

// Test historical logs
const historicalLogs = await dlpService.getHistoricalLogs(50);
console.log('Historical OfficeScan logs:', historicalLogs);
```

### **3. Check Server Status**
```typescript
import { dlpService } from '@/services/dlpService';

const status = dlpService.getWindowsServerStatus();
console.log('OfficeScan status:', status);
```

## 🔧 **Quick Start Checklist**

- [ ] Create `.env` file with OfficeScan credentials
- [ ] Start the application with `npm run dev`
- [ ] Navigate to Authentication tab
- [ ] Click "Open Authentication"
- [ ] Login to OfficeScan in popup window
- [ ] Close popup after successful login
- [ ] Verify authentication status
- [ ] Go to Real-time Logs tab
- [ ] Click "Start Monitoring"
- [ ] View DLP logs in real-time

**You're now ready to fetch DLP logs from your OfficeScan server!** 