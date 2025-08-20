import { describe, it, expect } from 'vitest';
import { app, getHealthStatus } from '@/index';

describe('App Module', () => {
  it('should have basic app structure', () => {
    expect(app.name).toBe('Modern Node Template'); // From environment
    expect(app.version).toBeDefined(); // Version should exist
    expect(typeof app.version).toBe('string'); // Version should be a string
    expect(app.version.length).toBeGreaterThan(0); // Version should not be empty
    expect(typeof app.start).toBe('function');
  });

  it('should return health status', () => {
    const health = getHealthStatus();
    expect(health).toHaveProperty('status');
    expect(health.status).toBe('healthy');
  });
});
