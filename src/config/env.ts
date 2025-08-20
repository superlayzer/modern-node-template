import dotenv from 'dotenv';
import { resolve } from 'path';
import { z } from 'zod';

// Load environment variables from .env file
dotenv.config({ path: resolve(process.cwd(), '.env') });

// Environment configuration schema
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  APP_NAME: z.string().min(1, 'APP_NAME is required'),
  APP_VERSION: z.string().min(1, 'APP_VERSION is required'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'http', 'debug']).default('info'),
});

// Environment configuration type (inferred from schema)
type EnvironmentConfig = z.infer<typeof envSchema>;

// Parse and validate environment variables
const parseEnv = (): EnvironmentConfig => {
  try {
    return envSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      APP_NAME: process.env.APP_NAME,
      APP_VERSION: process.env.APP_VERSION,
      LOG_LEVEL: process.env.LOG_LEVEL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues
        .map((issue) => issue.path.join('.'))
        .join(', ');
      throw new Error(`Environment validation failed: ${issues}`);
    }
    throw error;
  }
};

// Export validated environment configuration
export const env = parseEnv();

// Export individual getters for convenience
export const getEnv = <K extends keyof EnvironmentConfig>(
  key: K
): EnvironmentConfig[K] => {
  return env[key];
};

// Export environment validation function
export const validateEnvironment = (): void => {
  console.log('🔧 Validating environment configuration...');

  try {
    // Re-parse to ensure validation
    parseEnv();

    console.log('✅ Environment configuration validated successfully');
    console.log(`📋 App: ${env.APP_NAME} v${env.APP_VERSION}`);
    console.log(`🌍 Environment: ${env.NODE_ENV}`);
    console.log(`📊 Log Level: ${env.LOG_LEVEL}`);
  } catch (error) {
    console.error('❌ Environment validation failed:', error);
    throw error;
  }
};

// Export the schema for external use
export { envSchema };
export type { EnvironmentConfig };
