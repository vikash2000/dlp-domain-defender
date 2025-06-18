import dotenv from 'dotenv';

dotenv.config();

export const apexOneConfig = {
  serverUrl: process.env.APEX_ONE_SERVER_URL || 'https://your-apex-one-server',
  apiKey: process.env.APEX_ONE_API_KEY || '',
  username: process.env.APEX_ONE_USERNAME || '',
  password: process.env.APEX_ONE_PASSWORD || '',
  logInterval: parseInt(process.env.APEX_ONE_LOG_INTERVAL || '5', 10) // minutes
}; 