import { testMessage } from '@/utils/test';
import { env, validateEnvironment } from '@/config/env';
import { logger } from '@/config/logger';

logger.info('🚀 Modern Node.js TypeScript Template');
logger.info(testMessage);
logger.info('✨ Ready to build amazing things!');

// Validate environment configuration
validateEnvironment();

// Health check interface - simplified for memory efficiency
interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  processedItems: number;
  errors: number;
  lastProcessedAt?: Date;
}

// Application state - minimal memory footprint
let healthStatus: HealthStatus = {
  status: 'healthy',
  processedItems: 0,
  errors: 0,
};

// Simulate ultra-lightweight data processing work
const processData = async (): Promise<void> => {
  try {
    // Very minimal processing time (50-200ms)
    await new Promise((resolve) =>
      setTimeout(resolve, 50 + Math.random() * 150)
    );

    // Minimal data structure
    const value = Math.random() * 100;
    const processedValue = value * 2;
    const isValid = processedValue > 50;

    if (isValid) {
      healthStatus.processedItems++;
      healthStatus.lastProcessedAt = new Date();
      // Only log every 50th successful item (very quiet)
      if (healthStatus.processedItems % 50 === 0) {
        logger.info(`✅ Processed ${healthStatus.processedItems} items`);
      }
    } else {
      healthStatus.errors++;
      // Only log every 20th error
      if (healthStatus.errors % 20 === 0) {
        logger.warn(`⚠️ Skipped ${healthStatus.errors} invalid items`);
      }
    }
  } catch (error) {
    healthStatus.errors++;
    healthStatus.status = 'unhealthy';
    logger.error('❌ Error processing data:', error);
  }
};

// Health check function
export const getHealthStatus = (): HealthStatus => {
  return { ...healthStatus };
};

// Your application code goes here
export const app = {
  name: env.APP_NAME,
  version: env.APP_VERSION,
  environment: env.NODE_ENV,
  start: async () => {
    logger.info(`🚀 ${env.APP_NAME} v${env.APP_VERSION} started successfully!`);
    logger.info(`🌍 Environment: ${env.NODE_ENV}`);
    logger.info(`📊 Log Level: ${env.LOG_LEVEL}`);

    // Start the ultra-lightweight data processing loop
    logger.info('🔄 Starting ultra-lightweight data processing loop...');

    // Process data every 60 seconds (even less frequent for VPS)
    setInterval(async () => {
      await processData();
    }, 60000); // 1 minute

    // Log health status every 10 minutes (very infrequent)
    setInterval(() => {
      const health = getHealthStatus();
      logger.info(
        `📈 Health Check - Processed: ${health.processedItems}, Errors: ${health.errors}, Status: ${health.status}`
      );
    }, 600000); // 10 minutes

    // Initial processing
    await processData();
  },
};

// Start the application
app.start().catch((error) => {
  logger.error('❌ Failed to start application:', error);
  process.exit(1);
});
