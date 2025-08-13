# DB Core

Shared database library for Layzer with Drizzle ORM.

## What it does
- Defines database schemas and types
- Provides database connection utilities
- Exports migration functions for other services to use

## What it doesn't do
- Cannot run migrations by itself (it's a library)
- Cannot connect to databases independently
- Cannot execute SQL commands

## Usage
```typescript
// Import schemas and types
import { users, User } from 'db-core';

// Import migration functions
import { runMigrations } from 'db-core';

// Use in your services
await runMigrations();
```

## Commands
```bash
# Generate new migrations
pnpm db:generate

# Build library
pnpm build

# Run tests
pnpm test
```

## Structure
```
src/
├── schemas/          # Database table definitions
├── connection/       # Database connection logic
├── setup/            # Migration and setup functions
└── config/           # Environment configuration
```
