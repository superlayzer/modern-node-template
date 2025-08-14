import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { logger, stream } from '@/config/logger';

describe('Winston Logger', () => {
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  describe('logger instance', () => {
    it('should be defined', () => {
      expect(logger).toBeDefined();
    });

    it('should have required methods', () => {
      expect(typeof logger.error).toBe('function');
      expect(typeof logger.warn).toBe('function');
      expect(typeof logger.info).toBe('function');
      expect(typeof logger.http).toBe('function');
      expect(typeof logger.debug).toBe('function');
    });

    it('should have correct log levels', () => {
      expect(logger.levels).toEqual({
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
      });
    });
  });

  describe('logging methods', () => {
    it('should call error method without throwing', () => {
      expect(() => logger.error('Test error message')).not.toThrow();
    });

    it('should call warn method without throwing', () => {
      expect(() => logger.warn('Test warning message')).not.toThrow();
    });

    it('should call info method without throwing', () => {
      expect(() => logger.info('Test info message')).not.toThrow();
    });
  });

  describe('stream object', () => {
    it('should have write method', () => {
      expect(typeof stream.write).toBe('function');
    });

    it('should write messages without throwing', () => {
      expect(() => stream.write('Test HTTP message')).not.toThrow();
    });
  });
});
