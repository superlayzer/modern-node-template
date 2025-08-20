import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules/**', 'dist/**'],
    env: {
      NODE_ENV: 'test',
      APP_NAME: 'Modern Node Template',
      APP_VERSION: 'test-version',
      LOG_LEVEL: 'info',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'coverage/**',
        '**/*.config.{js,ts}',
        '**/*.config.js',
        '.lintstagedrc.js',
        'commitlint.config.js',
        'eslint.config.js',
        'nodemon.json',
        'vitest.config.ts',
        'tsconfig.json',
        'package.json',
        'package-lock.json',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
