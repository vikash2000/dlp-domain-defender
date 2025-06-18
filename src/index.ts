import ApexOneService from './services/apexOneService';
import { apexOneConfig } from './config/apexOne';

async function main() {
  try {
    const apexOneService = new ApexOneService(apexOneConfig);
    await apexOneService.startMonitoring(apexOneConfig.logInterval);
    console.log('Apex One monitoring service started successfully');
  } catch (error) {
    console.error('Failed to start Apex One monitoring service:', error);
    process.exit(1);
  }
}

main(); 