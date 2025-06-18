
import { apexOneService } from './services/apexOneService';
import { apexOneConfig } from './config/apexOne';

async function main() {
  try {
    console.log('Apex One service initialized with config:', {
      serverUrl: apexOneConfig.serverUrl,
      username: apexOneConfig.username ? 'configured' : 'not configured',
      password: apexOneConfig.password ? 'configured' : 'not configured'
    });
    
    console.log('Apex One service ready for authentication and log fetching');
  } catch (error) {
    console.error('Failed to initialize Apex One service:', error);
    process.exit(1);
  }
}

main();
