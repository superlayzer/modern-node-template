import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { env, getEnv, validateEnvironment, envSchema } from '@/config/env';

describe('Environment Configuration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset process.env before each test
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    // Restore original process.env after each test
    process.env = originalEnv;
  });

  describe('env object', () => {
    it('should have all required properties', () => {
      expect(env).toHaveProperty('NODE_ENV');
      expect(env).toHaveProperty('APP_NAME');
      expect(env).toHaveProperty('APP_VERSION');
      expect(env).toHaveProperty('LOG_LEVEL');
    });

    it('should have correct default values', () => {
      // NODE_ENV can be 'test', 'development', or 'production' depending on environment
      expect(['test', 'development', 'production']).toContain(env.NODE_ENV);
      expect(env.APP_NAME).toBe('Modern Node Template');
      expect(env.APP_VERSION).toBe('1.0.0');
      expect(env.LOG_LEVEL).toBe('info');
    });

    it('should parse environment variables correctly', () => {
      // Test that the getter function works with current environment
      expect(getEnv('NODE_ENV')).toBe(env.NODE_ENV);
      expect(getEnv('APP_NAME')).toBe('Modern Node Template');
    });
  });

  describe('getEnv function', () => {
    it('should return environment values', () => {
      expect(getEnv('NODE_ENV')).toBe(env.NODE_ENV);
      expect(getEnv('APP_NAME')).toBe('Modern Node Template');
    });
  });

  describe('validateEnvironment function', () => {
    it('should not throw when required variables are present', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      expect(() => validateEnvironment()).not.toThrow();

      expect(consoleSpy).toHaveBeenCalledWith(
        '🔧 Validating environment configuration...'
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        '✅ Environment configuration validated successfully'
      );

      consoleSpy.mockRestore();
    });

    it('should log environment information', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      validateEnvironment();

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('📋 App:')
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('🌍 Environment:')
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('📊 Log Level:')
      );

      consoleSpy.mockRestore();
    });
  });

  describe('zod schema', () => {
    it('should validate correct environment data', () => {
      const validData = {
        NODE_ENV: 'development',
        APP_NAME: 'Test App',
        APP_VERSION: '1.0.0',
        LOG_LEVEL: 'info',
      };

      const result = envSchema.parse(validData);
      expect(result).toEqual(validData);
    });

    it('should provide default values', () => {
      const dataWithDefaults = {
        APP_NAME: 'Test App',
        APP_VERSION: '1.0.0',
      };

      const result = envSchema.parse(dataWithDefaults);
      expect(result.NODE_ENV).toBe('development');
      expect(result.LOG_LEVEL).toBe('info');
    });

    it('should reject invalid NODE_ENV', () => {
      const invalidData = {
        NODE_ENV: 'invalid',
        APP_NAME: 'Test App',
        APP_VERSION: '1.0.0',
      };

      expect(() => envSchema.parse(invalidData)).toThrow();
    });

    it('should reject invalid LOG_LEVEL', () => {
      const invalidData = {
        NODE_ENV: 'development',
        APP_NAME: 'Test App',
        APP_VERSION: '1.0.0',
        LOG_LEVEL: 'invalid',
      };

      expect(() => envSchema.parse(invalidData)).toThrow();
    });

    it('should reject empty APP_NAME', () => {
      const invalidData = {
        NODE_ENV: 'development',
        APP_NAME: '',
        APP_VERSION: '1.0.0',
      };

      expect(() => envSchema.parse(invalidData)).toThrow();
    });
  });

  describe('type safety', () => {
    it('should have correct types for all properties', () => {
      expect(typeof env.NODE_ENV).toBe('string');
      expect(typeof env.APP_NAME).toBe('string');
      expect(typeof env.APP_VERSION).toBe('string');
      expect(typeof env.LOG_LEVEL).toBe('string');
    });
  });

  describe('error handling', () => {
    it('should handle validation with invalid data', () => {
      // Test Zod validation with invalid data
      const invalidData = {
        NODE_ENV: 'invalid-env',
        APP_NAME: 'Test App',
        APP_VERSION: '1.0.0',
      };

      expect(() => envSchema.parse(invalidData)).toThrow();
    });
  });
});
