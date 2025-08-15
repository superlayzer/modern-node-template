# Modern Node.js TypeScript Template

A modern Node.js TypeScript project template with enterprise-grade tooling and best practices.

## 🚀 Quick Start

```bash
# Clone this template
git clone https://github.com/superlayzer/modern-node-template.git your-project-name
cd your-project-name

# Update project details
npm pkg set name="your-actual-project-name"
npm pkg set description="Your project description"
npm pkg set repository.url="git@github.com:yourusername/your-project-name.git"
npm pkg set author="Your Name"

# Install dependencies and setup
npm install
npm run prepare

# Setup environment variables
cp env.example .env
# Edit .env with your actual values

# Verify everything is working
npm run test:run
npm run lint
npm start
```

## 🚀 Features

- **Generic Template** - Works for any Node.js application type (CLI, API, library, etc.)
- **TypeScript** - Modern TypeScript configuration with strict type checking
- **ESLint v9** - Latest ESLint with flat configuration
- **Prettier** - Code formatting with consistent style
- **Husky** - Git hooks for code quality enforcement
- **Conventional Commits** - Enforced commit message format
- **Path Mapping** - Clean imports with `@/*` aliases
- **ES Modules** - Modern ES module support
- **Hot Reload** - Development with nodemon
- **Modern Runtime** - tsx for fast TypeScript execution
- **Vitest** - Fast unit testing with coverage and UI
- **Environment Management** - Type-safe environment variables with Zod validation
- **Winston Logging** - Structured logging with multiple transports
- **CI/CD Pipeline** - GitHub Actions for automated testing and deployment
- **Semantic Versioning** - Automatic version bumping based on conventional commits
- **Docker Support** - Multi-stage Docker builds with production optimization

## 🛠️ Tech Stack

- **Runtime**: Node.js 24+ with TypeScript
- **Package Manager**: npm 11+
- **Code Quality**: ESLint v9 + Prettier
- **Git Hooks**: Husky + lint-staged + commitlint
- **Development**: nodemon + tsx
- **Testing**: Vitest + coverage + UI
- **Module System**: ES Modules
- **Environment**: dotenv + Zod for type-safe environment variable management
- **Logging**: Winston for structured logging
- **CI/CD**: GitHub Actions for automated workflows
- **Versioning**: Semantic versioning with automatic releases
- **Containerization**: Docker with multi-stage builds

## 📦 Development

```bash
# Start development server
npm run dev

# Run production build
npm start

# Run tests
npm test              # Watch mode
npm run test:run      # Single run
npm run test:coverage # With coverage

# Check code quality
npm run lint
npm run format:check
```

## 📁 Project Structure

```
src/
├── index.ts              # Main entry point
├── utils/                # Utility functions
│   └── test.ts          # Example utility
├── __tests__/           # Test files
│   ├── utils.test.ts    # Utils tests
│   └── app.test.ts      # App tests
├── types/                # TypeScript type definitions (create as needed)
├── config/               # Configuration files (create as needed)
└── services/             # Business logic services (create as needed)
```

## 📁 Configuration Files

```
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint v9 flat config
├── .prettierrc          # Prettier configuration
├── nodemon.json         # Development server config
├── .lintstagedrc.js     # Pre-commit hooks
├── commitlint.config.js # Commit message rules
├── vitest.config.ts     # Test configuration
└── .husky/              # Git hooks
```

````

## 🔧 Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Run production build                     |
| `npm run dev`          | Start development server with hot reload |
| `npm test`             | Run tests in watch mode                  |
| `npm run test:run`     | Run tests once (CI mode)                 |
| `npm run test:coverage`| Run tests with coverage report           |
| `npm run lint`         | Check code quality with ESLint           |
| `npm run lint:fix`     | Fix ESLint issues automatically          |
| `npm run format`       | Format code with Prettier                |
| `npm run format:check` | Check code formatting                    |
| `npm run prepare`      | Setup Git hooks                          |
| `npm run docker:build` | Build Docker image                       |
| `npm run docker:run`   | Run Docker container                     |
| `npm run docker:dev`   | Run Docker container in development mode |

## 🎯 Code Quality

### ESLint Rules

- TypeScript-specific rules
- No unused variables
- No explicit `any` types
- Strict type checking

### Prettier Configuration

- Semi-colons enabled
- Single quotes
- 80 character line width
- 2 space indentation

### Git Hooks

This project uses **Husky** to manage Git hooks:

- **Pre-commit**: Run ESLint, Prettier, and tests on staged files
- **Commit-msg**: Validate conventional commit format using commitlint

**Setup**: Hooks are automatically installed when you run `npm install` (via the `prepare` script).

**Configuration**:
- Pre-commit hooks: `.lintstagedrc.js`
- Commit message rules: `commitlint.config.js`

## 📝 Conventional Commits

This project enforces conventional commit messages:

```bash
type(scope): description
````

**Examples:**

```bash
feat: add user authentication
fix(auth): resolve login issue
feat!: breaking change in API
docs: update README
style: format code
refactor: simplify user service
test: add unit tests
chore: update dependencies
```

**Breaking Change Example:**

```bash
feat: new feature

BREAKING CHANGE: This changes the API interface
```

### Breaking Changes

The project supports two formats for breaking changes:

#### 1. Exclamation Mark in Type

```bash
git commit -m "feat!: breaking change in API"
git commit -m "fix!: breaking fix that changes behavior"
```

#### 2. BREAKING CHANGE in Body

```bash
git commit -m "feat: new feature

BREAKING CHANGE: This changes the API interface"
```

**Both formats trigger a major version bump** (1.1.1 → 2.0.0) when pushed to main.

### Commit Types

| Type       | Description              | Version Bump          |
| ---------- | ------------------------ | --------------------- |
| `feat`     | New feature              | Minor (1.0.0 → 1.1.0) |
| `fix`      | Bug fix                  | Patch (1.1.0 → 1.1.1) |
| `docs`     | Documentation            | None                  |
| `style`    | Code style changes       | None                  |
| `refactor` | Code refactoring         | None                  |
| `perf`     | Performance improvements | None                  |
| `test`     | Adding tests             | None                  |
| `build`    | Build system changes     | None                  |
| `ci`       | CI/CD changes            | None                  |
| `chore`    | Maintenance tasks        | None                  |
| `revert`   | Revert previous commit   | None                  |

## 🔗 Path Mapping

Use `@/*` aliases for clean imports:

```typescript
// Instead of
import { something } from '../../../utils/something';

// Use
import { something } from '@/utils/something';
```

## 🚀 CI/CD Pipeline

This project includes GitHub Actions workflows for automated testing, deployment, and versioning.

### Workflows

- **CI/CD Pipeline** (`.github/workflows/ci.yml`)
  - Runs on push to `main`/`develop` and pull requests
  - Tests against Node.js 24.x
  - Runs linting, formatting checks, and tests
  - Generates coverage reports

- **Semantic Release** (`.github/workflows/tag.yml`)
  - Automatically bumps version based on commit types
  - Creates GitHub releases with changelog
  - Updates package.json version

- **Deploy** (`.github/workflows/deploy.yml`)
  - Runs after successful CI completion
  - Deploys to production (customize based on your platform)
  - Examples included for Vercel, Railway, Heroku, AWS

### Semantic Versioning

The project uses semantic-release for automatic versioning based on conventional commits:

**Commit Types:**

- `feat:` → Minor version bump (1.0.0 → 1.1.0)
- `fix:` → Patch version bump (1.1.0 → 1.1.1)
- `feat!:` or `fix!:` → Major version bump (1.1.1 → 2.0.0)
- `BREAKING CHANGE:` in body → Major version bump (1.1.1 → 2.0.0)
- `docs:`, `style:`, `refactor:`, `test:`, `chore:` → No version bump

**How it works:**

1. **Write conventional commits** → Follow the commit format
2. **Push to main** → Semantic-release analyzes commits
3. **Automatic release** → Version bumped, tag created, GitHub release generated

```bash
# Examples of commits that trigger releases:
git commit -m "feat: add user authentication"     # 1.0.0 → 1.1.0
git commit -m "fix: resolve login bug"            # 1.1.0 → 1.1.1
git commit -m "feat!: breaking change in API"     # 1.1.1 → 2.0.0
git commit -m "feat: new API

BREAKING CHANGE: This changes the API interface"   # 1.1.1 → 2.0.0
git commit -m "docs: update README"               # No version bump
```

### Setup

1. **Enable GitHub Actions** in your repository settings
2. **Customize deployment** in `.github/workflows/deploy.yml` for your platform
3. **Grant permissions** for tag creation (if needed)

### Local Testing

Test the CI pipeline locally:

```bash
# Install act (GitHub Actions local runner)
brew install act  # macOS
# or download from: https://github.com/nektos/act

# Run CI workflow locally
act push
```

## 🐳 Docker Support

This project includes Docker support with multi-stage builds for production optimization.

### Local Development

```bash
# Build Docker image
npm run docker:build

# Run container (uses default environment)
npm run docker:run

# Run with custom environment
npm run docker:run:prod

# Development mode with volume mounting
npm run docker:dev

# Docker Compose (simple app container)
npm run docker:compose

# Docker Compose development mode
npm run docker:compose:dev

# Build and run with Docker Compose
npm run docker:compose:build

# Stop Docker Compose services
npm run docker:compose:down

# View Docker Compose logs
npm run docker:compose:logs
```

### Docker Features

- **Multi-stage builds** - Optimized production images
- **Non-root user** - Security best practices
- **Layer caching** - Fast builds with GitHub Actions cache
- **Production ready** - Minimal image size with Alpine Linux
- **Simple execution** - Runs the application and exits
- **Environment handling** - Uses `env.example` as base, override at runtime
- **Organized structure** - Docker files in dedicated `docker/` folder
- **Docker Compose** - Simple multi-container development environment

### Docker Workflow

The project includes automated Docker builds in the CI/CD pipeline:

1. **Semantic Release** → Creates new version
2. **Docker Build** → Builds Docker image locally (no push)
3. **Deploy** → Builds and uses Docker image for deployment

**Note**: The Docker workflow is configured to build images locally without pushing to a registry. This avoids permission issues and simplifies the setup. Images are built fresh in each workflow run.

### Environment Variables in Docker

The Docker image uses `env.example` as the base environment configuration. You can override any environment variable at runtime:

```bash
# Override specific variables
docker run -e NODE_ENV=production modern-node-template

# Use a custom .env file
docker run --env-file .env.production modern-node-template

# Set all variables inline
docker run -e NODE_ENV=production -e APP_NAME="My App" modern-node-template
```

### Docker Registry Setup (Optional)

If you want to push Docker images to a registry (Docker Hub, GHCR, etc.):

1. **Update the workflow** to enable pushing:
   - Set `push: true` in `.github/workflows/docker.yml`
   - Add registry authentication secrets

2. **Add secrets** to your GitHub repository:
   - `DOCKER_USERNAME` - Your registry username
   - `DOCKER_PASSWORD` - Your registry password/token

3. **Images will be published** to your chosen registry

**Current setup**: Images are built locally for deployment without registry dependencies.

## 🌍 Environment Variables

This project uses dotenv + Zod for environment variable management with runtime type validation and type-safe configuration.

### Setup

1. Copy the example environment file:

   ```bash
   cp env.example .env
   ```

2. Edit `.env` with your actual values:

   ```bash
   # Environment Configuration
   NODE_ENV=development

   # Application Configuration
   APP_NAME=Your App Name
   APP_VERSION=1.0.0
   LOG_LEVEL=info

   # Optional: Only needed for web applications (Express, Fastify, etc.)
   # PORT=3000
   ```

### Usage

Import the environment configuration in your code:

```typescript
import { env, getEnv, validateEnvironment, envSchema } from '@/config/env';

// Access environment variables with type safety
console.log(env.APP_NAME); // string
console.log(env.LOG_LEVEL); // 'error' | 'warn' | 'info' | 'http' | 'debug'
console.log(env.NODE_ENV); // 'development' | 'production' | 'test'

// Use individual getter with type inference
const appName = getEnv('APP_NAME'); // string

// Validate environment on startup
validateEnvironment();

// Use schema for external validation
const isValidEnv = envSchema.safeParse(process.env).success;
```

### Features

- **Runtime Validation**: Zod schemas validate environment variables at startup
- **Type Safety**: All environment variables are typed with TypeScript inference
- **Default Values**: Sensible defaults for development
- **Enum Validation**: Strict validation for NODE_ENV and LOG_LEVEL
- **Error Handling**: Clear error messages for validation failures
- **Schema Export**: Environment schema available for external validation

## 🔍 Zod Validation

This project includes Zod for runtime type validation. The environment configuration uses Zod schemas for type-safe environment variable management.

### Environment Validation

The environment configuration uses Zod for runtime validation:

```typescript
import { envSchema } from '@/config/env';

// Validate environment variables
const result = envSchema.safeParse(process.env);
if (!result.success) {
  console.error('Environment validation failed:', result.error);
}
```

### What's Demonstrated

- **Runtime Validation**: Environment variables are validated at startup
- **Type Safety**: Automatic TypeScript types from Zod schemas
- **Error Handling**: Clear error messages for validation failures
- **Default Values**: Sensible defaults for development

### Adding Feature Flags

For feature flags in production applications, consider using dedicated feature flag services like:

- [LaunchDarkly](https://launchdarkly.com/)
- [Split.io](https://split.io/)
- [Unleash](https://unleash.github.io/)
- [Flagsmith](https://flagsmith.com/)

These provide better management, A/B testing, and gradual rollouts than environment variables.

## 📝 Logging

This project uses Winston for structured logging with multiple transports and environment-based log levels.

### Features

- **Multiple Transports**: Console and file logging
- **Environment-Based Levels**: Debug in development, warn in production
- **Colored Output**: Different colors for different log levels
- **Timestamp**: All logs include timestamps
- **File Logs**: Separate error and combined log files

### Usage

```typescript
import { logger } from '@/config/logger';

// Different log levels
logger.error('Error message');
logger.warn('Warning message');
logger.info('Info message');
logger.http('HTTP request message');
logger.debug('Debug message (development only)');
```

### Log Files

- `logs/error.log` - Only error level messages
- `logs/all.log` - All log messages

### Log Levels

- **error** (0) - Application errors
- **warn** (1) - Warning messages
- **info** (2) - General information
- **http** (3) - HTTP request logs
- **debug** (4) - Debug information (development only)`

## 🚀 Deployment

### Build for Production

```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

### Docker (Optional)

```dockerfile
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:24-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

CMD ["node", "dist/index.js"]
```

## 📚 Development Workflow

1. **Create feature branch**: `git checkout -b feature/amazing-feature`
2. **Make changes**: Write your code
3. **Run tests**: `npm test` (watch mode) or `npm run test:run` (single run)
4. **Check quality**: `npm run lint && npm run format:check`
5. **Commit changes**: `git commit -m 'feat: add amazing feature'` (pre-commit runs automatically)
6. **Push branch**: `git push origin feature/amazing-feature`
7. **Create PR**: Open pull request

## 🔧 Customization

### Adding Dependencies

```bash
# Production dependencies
npm install package-name

# Development dependencies
npm install -D package-name
```

### Updating Configuration

- **TypeScript**: Edit `tsconfig.json`
- **ESLint**: Edit `eslint.config.js`
- **Prettier**: Edit `.prettierrc`
- **Nodemon**: Edit `nodemon.json`

## 🎯 Application Types

This template is designed to be **truly generic** and works for any Node.js application:

### Web Applications (Express, Fastify, etc.)

```bash
# Add PORT to your .env file
PORT=3000
```

### CLI Tools

```bash
# No PORT needed - just use the template as-is
```

### Libraries

```bash
# No PORT needed - export your functions/modules
```

### Scripts

```bash
# No PORT needed - run your logic and exit
```

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/superlayzer/modern-node-template/issues)
- **Documentation**: This README file contains all the documentation you need

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**This template provides a solid foundation for modern Node.js TypeScript projects with enterprise-grade tooling and best practices.** 🚀
