import { describe, it, expect } from 'vitest';
import { testMessage, validateSetup } from '@/utils/test';

describe('Utils Module', () => {
  it('should return test message', () => {
    expect(testMessage).toBe(
      '✅ Path mapping and ES modules are working perfectly!'
    );
  });

  it('should validate setup', () => {
    expect(() => validateSetup()).not.toThrow();
  });
});
