# Authentication Configuration Guide

## Overview
Yes, you may need login details for the server depending on your server's security configuration. This guide shows you how to configure different authentication methods.

## 🔐 **Authentication Methods Supported**

### **1. No Authentication (Public API)**
If your server doesn't require authentication:
```env
VITE_USE_API_AUTH=false
# or simply don't set any auth variables
```

### **2. Bearer Token Authentication**
For API token-based authentication:
```env
VITE_USE_API_AUTH=true
VITE_API_TOKEN=your-api-token-here
```

### **3. Basic Authentication (Username/Password)**
For username/password authentication:
```env
VITE_USE_API_AUTH=true
VITE_API_USERNAME=your-username
VITE_API_PASSWORD=your-password
```

### **4. Apex One Integration Authentication**
For Apex One server integration:
```env
VITE_APEX_ONE_SERVER_URL=https://your-apex-one-server.com
VITE_APEX_ONE_API_KEY=your-api-key
VITE_APEX_ONE_USERNAME=your-username
VITE_APEX_ONE_PASSWORD=your-password
```

## 🔧 **Complete Environment Configuration**

Create a `.env` file with the appropriate authentication settings:

### **For Public API (No Auth):**
```env
# Server Configuration
VITE_API_BASE_URL=http://your-server-url/api
VITE_USE_MOCK_DATA=false
VITE_USE_API_AUTH=false

# Log Fetching Settings
VITE_ENABLE_REALTIME_LOGS=true
VITE_REALTIME_LOGS_INTERVAL=3000
```

### **For Bearer Token Authentication:**
```env
# Server Configuration
VITE_API_BASE_URL=http://your-server-url/api
VITE_USE_MOCK_DATA=false
VITE_USE_API_AUTH=true
VITE_API_TOKEN=your-api-token-here

# Log Fetching Settings
VITE_ENABLE_REALTIME_LOGS=true
VITE_REALTIME_LOGS_INTERVAL=3000
```

### **For Basic Authentication:**
```env
# Server Configuration
VITE_API_BASE_URL=http://your-server-url/api
VITE_USE_MOCK_DATA=false
VITE_USE_API_AUTH=true
VITE_API_USERNAME=your-username
VITE_API_PASSWORD=your-password

# Log Fetching Settings
VITE_ENABLE_REALTIME_LOGS=true
VITE_REALTIME_LOGS_INTERVAL=3000
```

### **For Apex One Integration:**
```env
# Apex One Configuration
VITE_APEX_ONE_SERVER_URL=https://your-apex-one-server.com
VITE_APEX_ONE_API_KEY=your-api-key
VITE_APEX_ONE_USERNAME=your-username
VITE_APEX_ONE_PASSWORD=your-password
VITE_APEX_ONE_LOG_INTERVAL=5

# General Settings
VITE_USE_MOCK_DATA=false
VITE_ENABLE_REALTIME_LOGS=true
```

## 🔧 **How Authentication Works**

### **1. Automatic Header Injection**
The application automatically adds authentication headers to all API requests:

```typescript
// Bearer Token
headers['Authorization'] = `Bearer ${API_TOKEN}`;

// Basic Authentication
const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`);
headers['Authorization'] = `Basic ${credentials}`;
```

### **2. Authentication Priority**
1. **Bearer Token** (if `VITE_API_TOKEN` is set)
2. **Basic Auth** (if `VITE_API_USERNAME` and `VITE_API_PASSWORD` are set)
3. **No Auth** (if `VITE_USE_API_AUTH=false`)

### **3. Error Handling**
- Authentication failures are logged to console
- Application falls back to mock data if authentication fails
- User sees error messages for authentication issues

## 🔧 **Testing Authentication**

### **1. Test Server Connection**
```typescript
import { isServerAvailable } from '@/config/server';

const serverAvailable = await isServerAvailable();
console.log('Server available:', serverAvailable);
```

### **2. Test Authentication**
```typescript
import { dlpService } from '@/services/dlpService';

try {
  const logs = await dlpService.getRealTimeLogs();
  console.log('Authentication successful:', logs);
} catch (error) {
  console.error('Authentication failed:', error);
}
```

### **3. Check Authentication Configuration**
```typescript
import { serverConfig } from '@/config/server';

console.log('Auth enabled:', serverConfig.authentication.enabled);
console.log('Auth type:', serverConfig.authentication.type);
```

## 🔧 **Common Authentication Scenarios**

### **Scenario 1: Internal Development Server**
```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_USE_API_AUTH=false
```

### **Scenario 2: Production Server with API Key**
```env
VITE_API_BASE_URL=https://api.yourcompany.com/api
VITE_USE_API_AUTH=true
VITE_API_TOKEN=prod-api-key-12345
```

### **Scenario 3: Corporate Server with Basic Auth**
```env
VITE_API_BASE_URL=https://corp-server.company.com/api
VITE_USE_API_AUTH=true
VITE_API_USERNAME=dlp-service
VITE_API_PASSWORD=secure-password-123
```

### **Scenario 4: Apex One Security Platform**
```env
VITE_APEX_ONE_SERVER_URL=https://apexone.company.com
VITE_APEX_ONE_API_KEY=apex-api-key
VITE_APEX_ONE_USERNAME=admin
VITE_APEX_ONE_PASSWORD=admin-password
```

## 🔧 **Security Best Practices**

### **1. Environment Variables**
- Never commit `.env` files to version control
- Use different credentials for development and production
- Rotate API keys regularly

### **2. Token Management**
- Use short-lived tokens when possible
- Store tokens securely
- Implement token refresh mechanisms

### **3. Password Security**
- Use strong passwords
- Consider using environment-specific passwords
- Implement password rotation policies

## 🔧 **Troubleshooting Authentication**

### **Common Issues:**

1. **"401 Unauthorized"**
   - Check if credentials are correct
   - Verify `VITE_USE_API_AUTH=true`
   - Ensure server accepts the authentication method

2. **"403 Forbidden"**
   - Check if user has required permissions
   - Verify API key is valid and not expired
   - Check server access policies

3. **"Network Error"**
   - Check if server is accessible
   - Verify `VITE_API_BASE_URL` is correct
   - Check firewall/network settings

### **Debug Steps:**
1. Check browser Network tab for request headers
2. Verify environment variables are loaded
3. Test authentication with curl or Postman
4. Check server logs for authentication errors

## 🔧 **Example Server Authentication Endpoints**

Your server should handle these authentication methods:

### **Bearer Token Validation:**
```
GET /api/dlp/stats
Headers: Authorization: Bearer your-token
```

### **Basic Auth Validation:**
```
GET /api/dlp/stats
Headers: Authorization: Basic base64(username:password)
```

### **Apex One Authentication:**
```
POST /api/auth
Body: { username, password, apiKey }
Response: { token }
``` 