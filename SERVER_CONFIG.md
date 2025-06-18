# Server Configuration Guide

## Overview
This guide explains how to configure the DLP Domain Defender application to fetch data from a real server instead of using mock data.

## 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api
VITE_USE_MOCK_DATA=false

# Feature Flags
VITE_ENABLE_REALTIME_LOGS=true
VITE_ENABLE_PRISMA=true

# Apex One Integration
VITE_APEX_ONE_SERVER_URL=https://your-apex-one-server.com
VITE_APEX_ONE_API_KEY=your-api-key-here
VITE_APEX_ONE_USERNAME=your-username
VITE_APEX_ONE_PASSWORD=your-password
VITE_APEX_ONE_LOG_INTERVAL=5

# Database Configuration
VITE_DATABASE_URL=file:./dev.db

# Polling Intervals (in milliseconds)
VITE_DLP_STATS_INTERVAL=5000
VITE_SECURITY_METRICS_INTERVAL=10000
VITE_REALTIME_LOGS_INTERVAL=3000
```

## 2. Key Configuration Files

### `src/config/server.ts`
- Centralized server configuration
- Environment variable management
- API endpoint definitions
- Feature flags

### `src/services/dlpService.ts`
- Modified to support both mock and real server data
- Automatic fallback to mock data if server is unavailable
- Real-time and historical log fetching

### `src/config/apexOne.ts`
- Apex One integration configuration
- Authentication settings
- Log interval configuration

## 3. Server API Endpoints

Your server should implement these endpoints:

- `GET /api/health` - Health check
- `GET /api/dlp/stats` - DLP statistics
- `GET /api/security/metrics` - Security metrics
- `GET /api/dlp/logs/realtime` - Real-time logs
- `GET /api/dlp/logs/historical` - Historical logs
- `GET /api/whitelist` - Whitelist management
- `GET /api/suspicious-activity` - Suspicious activity data

## 4. Switching Between Mock and Real Data

### To use mock data (development):
```env
VITE_USE_MOCK_DATA=true
# or simply don't set VITE_API_BASE_URL
```

### To use real server data:
```env
VITE_USE_MOCK_DATA=false
VITE_API_BASE_URL=http://your-server-url/api
```

## 5. Testing Server Connection

The application includes a helper function to test server availability:

```typescript
import { isServerAvailable } from '@/config/server';

const serverAvailable = await isServerAvailable();
console.log('Server available:', serverAvailable);
```

## 6. Error Handling

The application includes automatic fallback mechanisms:
- If server is unavailable, falls back to mock data
- Graceful error handling with console logging
- User-friendly error messages

## 7. Development vs Production

### Development:
- Use mock data for faster development
- Local database (SQLite)
- Shorter polling intervals

### Production:
- Real server integration
- Production database
- Optimized polling intervals
- Proper error handling and logging 