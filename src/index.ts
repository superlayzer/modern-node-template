import { testMessage } from '@/utils/test';
import { env, validateEnvironment } from '@/config/env';
import { logger } from '@/config/logger';

logger.info('🚀 Modern Node.js TypeScript Template');
logger.info(testMessage);
logger.info('✨ Ready to build amazing things!');

// Validate environment configuration
validateEnvironment();

// Your application code goes here
export const app = {
  name: env.APP_NAME,
  version: env.APP_VERSION,
  port: env.PORT,
  environment: env.NODE_ENV,
  start: () => {
    logger.info(`🚀 ${env.APP_NAME} v${env.APP_VERSION} started successfully!`);
    logger.info(`🌍 Environment: ${env.NODE_ENV}`);
    logger.info(`🚀 Port: ${env.PORT}`);
    logger.info(`📊 Log Level: ${env.LOG_LEVEL}`);
  },
};
