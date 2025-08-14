import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env file
dotenv.config({ path: resolve(process.cwd(), '.env') });

// Environment configuration interface
interface EnvironmentConfig {
  NODE_ENV: string;
  PORT: number;
  APP_NAME: string;
  APP_VERSION: string;
  LOG_LEVEL: string;
}

// Parse and validate environment variables
const parseEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (!value && defaultValue === undefined) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value || defaultValue || '';
};

const parseNumber = (key: string, defaultValue?: number): number => {
  const value = parseEnvVar(key, defaultValue?.toString());
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${key} must be a valid number`);
  }
  return parsed;
};

// Export validated environment configuration
export const env: EnvironmentConfig = {
  NODE_ENV: parseEnvVar('NODE_ENV', 'development'),
  PORT: parseNumber('PORT', 3000),
  APP_NAME: parseEnvVar('APP_NAME', 'Modern Node Template'),
  APP_VERSION: parseEnvVar('APP_VERSION', '1.0.0'),
  LOG_LEVEL: parseEnvVar('LOG_LEVEL', 'info'),
};

// Export individual getters for convenience
export const getEnv = (
  key: keyof EnvironmentConfig
): EnvironmentConfig[keyof EnvironmentConfig] => {
  return env[key];
};

// Export environment validation function
export const validateEnvironment = (): void => {
  console.log('🔧 Validating environment configuration...');

  // In test environment, be more lenient with validation
  const isTestEnv = process.env.NODE_ENV === 'test';
  const requiredVars = isTestEnv
    ? ['NODE_ENV']
    : ['NODE_ENV', 'PORT', 'APP_NAME'];
  const missingVars = requiredVars.filter((key) => !process.env[key]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  console.log('✅ Environment configuration validated successfully');
  console.log(`📋 App: ${env.APP_NAME} v${env.APP_VERSION}`);
  console.log(`🌍 Environment: ${env.NODE_ENV}`);
  console.log(`🚀 Port: ${env.PORT}`);
  console.log(`📊 Log Level: ${env.LOG_LEVEL}`);
};
