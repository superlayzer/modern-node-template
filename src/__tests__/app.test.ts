import { describe, it, expect } from 'vitest';
import { app, getHealthStatus } from '@/index';

describe('App Module', () => {
  describe('app object', () => {
    it('should have the correct structure', () => {
      expect(app).toHaveProperty('name');
      expect(app).toHaveProperty('version');
      expect(app).toHaveProperty('environment');
      expect(app).toHaveProperty('start');
    });

    it('should have the correct name', () => {
      expect(app.name).toBe('Modern Node Template');
    });

    it('should have the correct version', () => {
      expect(app.version).toBe('1.0.0');
    });

    it('should have environment property', () => {
      expect(app).toHaveProperty('environment');
      expect(typeof app.environment).toBe('string');
    });

    it('should have start as a function', () => {
      expect(typeof app.start).toBe('function');
    });
  });

  describe('getHealthStatus', () => {
    it('should return a health status object', () => {
      const health = getHealthStatus();

      expect(health).toHaveProperty('status');
      expect(health).toHaveProperty('processedItems');
      expect(health).toHaveProperty('errors');
    });

    it('should return initial health status', () => {
      const health = getHealthStatus();

      expect(health.status).toBe('healthy');
      expect(health.processedItems).toBe(0);
      expect(health.errors).toBe(0);
    });
  });

  describe('app.start()', () => {
    it('should not throw when called', async () => {
      // Simple test that the function can be called without errors
      // Use a timeout since the app runs indefinitely
      app.start();

      // Wait a short time to ensure it starts without throwing
      await new Promise((resolve) => setTimeout(resolve, 100));

      // If we get here, it didn't throw during startup
      expect(true).toBe(true);
    });
  });
});
