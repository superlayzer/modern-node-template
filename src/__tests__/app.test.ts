import { describe, it, expect, vi } from 'vitest';
import { app } from '@/index';

describe('App Module', () => {
  describe('app object', () => {
    it('should have the correct structure', () => {
      expect(app).toHaveProperty('name');
      expect(app).toHaveProperty('version');
      expect(app).toHaveProperty('start');
    });

    it('should have the correct name', () => {
      expect(app.name).toBe('Modern Node Template');
    });

    it('should have the correct version', () => {
      expect(app.version).toBe('1.0.0');
    });

    it('should have port property', () => {
      expect(app).toHaveProperty('port');
      expect(typeof app.port).toBe('number');
    });

    it('should have environment property', () => {
      expect(app).toHaveProperty('environment');
      expect(typeof app.environment).toBe('string');
    });

    it('should have start as a function', () => {
      expect(typeof app.start).toBe('function');
    });
  });

  describe('app.start()', () => {
    it('should not throw when called', () => {
      expect(() => app.start()).not.toThrow();
    });

    it('should log a success message', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      app.start();

      expect(consoleSpy).toHaveBeenCalledWith(
        '🚀 Modern Node Template v1.0.0 started successfully!'
      );

      consoleSpy.mockRestore();
    });
  });
});
