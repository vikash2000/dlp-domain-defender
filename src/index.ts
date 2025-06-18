
import { apexOneService } from './services/apexOneService';
import { apexOneConfig } from './config/apexOne';

async function main() {
  try {
    await apexOneService.startMonitoring?.(apexOneConfig.logInterval);
    console.log('Apex One monitoring service started successfully');
  } catch (error) {
    console.error('Failed to start Apex One monitoring service:', error);
    process.exit(1);
  }
}

main();
