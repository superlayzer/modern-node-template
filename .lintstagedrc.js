export default {
  // TypeScript and JavaScript files
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],

  // Test files (handled by the same rules as regular TS/JS files)
  '*.{test,spec}.{js,ts}': ['eslint --fix', 'prettier --write'],

  // Configuration and documentation files
  '*.{json,md,yml,yaml}': ['prettier --write'],

  // TypeScript configuration files
  '*.config.{js,ts}': ['eslint --fix', 'prettier --write'],
};
