import { describe, it, expect } from 'vitest';
import { logger } from '@/config/logger';

describe('Logger', () => {
  it('should have logging methods', () => {
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.error).toBe('function');
    expect(typeof logger.warn).toBe('function');
  });

  it('should log without throwing', () => {
    expect(() => logger.info('Test message')).not.toThrow();
  });
});
