import { testMessage } from '@/utils/test';
import { env, validateEnvironment } from '@/config/env';

console.log('🚀 Modern Node.js TypeScript Template');
console.log(testMessage);
console.log('✨ Ready to build amazing things!');

// Validate environment configuration
validateEnvironment();

// Your application code goes here
export const app = {
  name: env.APP_NAME,
  version: env.APP_VERSION,
  port: env.PORT,
  environment: env.NODE_ENV,
  start: () => {
    console.log(`🚀 ${env.APP_NAME} v${env.APP_VERSION} started successfully!`);
    console.log(`🌍 Environment: ${env.NODE_ENV}`);
    console.log(`🚀 Port: ${env.PORT}`);
    console.log(`📊 Log Level: ${env.LOG_LEVEL}`);
  },
};
