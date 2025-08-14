import { describe, it, expect, vi } from 'vitest';
import { testMessage, validateSetup } from '@/utils/test';

describe('Utils Module', () => {
  it('should return the expected test message', () => {
    expect(testMessage).toBe(
      '✅ Path mapping and ES modules are working perfectly!'
    );
  });

  it('should be a string', () => {
    expect(typeof testMessage).toBe('string');
  });

  it('should validate setup without throwing', () => {
    expect(() => validateSetup()).not.toThrow();
  });

  it('should log validation messages', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    validateSetup();

    expect(consoleSpy).toHaveBeenCalledWith('🔧 Validating project setup...');
    expect(consoleSpy).toHaveBeenCalledWith('✅ TypeScript configuration');
    expect(consoleSpy).toHaveBeenCalledWith('✅ ESLint v9 with flat config');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Prettier formatting');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Husky Git hooks');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Conventional commits');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Path mapping (@/*)');
    expect(consoleSpy).toHaveBeenCalledWith('✅ ES modules');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Hot reload with nodemon');
    expect(consoleSpy).toHaveBeenCalledWith('✅ Modern runtime with tsx');
    expect(consoleSpy).toHaveBeenCalledWith('🎉 All systems ready!');

    consoleSpy.mockRestore();
  });
});
