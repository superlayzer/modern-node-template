import { describe, it, expect } from 'vitest';
import { env, validateEnvironment } from '@/config/env';

describe('Environment Configuration', () => {
  it('should load environment variables', () => {
    expect(env.APP_NAME).toBe('Modern Node Template'); // From vitest config
    expect(env.APP_VERSION).toBeDefined(); // Version should exist
    expect(typeof env.APP_VERSION).toBe('string'); // Version should be a string
    expect(env.APP_VERSION.length).toBeGreaterThan(0); // Version should not be empty
    expect(['test', 'development', 'production']).toContain(env.NODE_ENV);
  });

  it('should validate environment without errors', () => {
    expect(() => validateEnvironment()).not.toThrow();
  });
});
