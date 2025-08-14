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
- **Environment Management** - Type-safe environment variables with dotenv
- **Winston Logging** - Structured logging with multiple transports
- **CI/CD Pipeline** - GitHub Actions for automated testing and deployment
- **Semantic Versioning** - Automatic version bumping based on conventional commits

## 🛠️ Tech Stack

- **Runtime**: Node.js 24+ with TypeScript
- **Package Manager**: npm 11+
- **Code Quality**: ESLint v9 + Prettier
- **Git Hooks**: Husky + lint-staged + commitlint
- **Development**: nodemon + tsx
- **Testing**: Vitest + coverage + UI
- **Module System**: ES Modules
- **Environment**: dotenv for environment variable management
- **Logging**: Winston for structured logging
- **CI/CD**: GitHub Actions for automated workflows
- **Versioning**: Semantic versioning with automatic releases

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

```

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

- **Pre-commit**: Run ESLint, Prettier, and tests on staged files
- **Commit-msg**: Validate conventional commit format

## 📝 Conventional Commits

This project enforces conventional commit messages:

```

type(scope): description

Examples:
feat: add user authentication
fix(auth): resolve login issue
feat!: breaking change in API
feat: new feature

BREAKING CHANGE: This changes the API interface
docs: update README
style: format code
refactor: simplify user service
test: add unit tests
chore: update dependencies

````

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

| Type | Description | Version Bump |
|------|-------------|--------------|
| `feat` | New feature | Minor (1.0.0 → 1.1.0) |
| `fix` | Bug fix | Patch (1.1.0 → 1.1.1) |
| `docs` | Documentation | None |
| `style` | Code style changes | None |
| `refactor` | Code refactoring | None |
| `perf` | Performance improvements | None |
| `test` | Adding tests | None |
| `build` | Build system changes | None |
| `ci` | CI/CD changes | None |
| `chore` | Maintenance tasks | None |
| `revert` | Revert previous commit | None |

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

## 🌍 Environment Variables

This project uses dotenv for environment variable management with type-safe configuration.

### Setup

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` with your actual values:
   ```bash
   # Environment Configuration
   NODE_ENV=development
   PORT=3000

   # Application Configuration
   APP_NAME=Your App Name
   APP_VERSION=1.0.0
   LOG_LEVEL=info
   ```

### Usage

Import the environment configuration in your code:

```typescript
import { env, getEnv, validateEnvironment } from '@/config/env';

// Access environment variables with type safety
console.log(env.PORT); // number
console.log(env.APP_NAME); // string
console.log(env.LOG_LEVEL); // string

// Use individual getter
const port = getEnv('PORT');

// Validate environment on startup
validateEnvironment();

### Features

- **Type Safety**: All environment variables are typed
- **Default Values**: Sensible defaults for development
- **Validation**: Automatic validation of required variables
- **Parsing**: Automatic parsing of numbers
- **Error Handling**: Clear error messages for missing variables

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

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/superlayzer/modern-node-template/issues)
- **Documentation**: This README file contains all the documentation you need

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**This template provides a solid foundation for modern Node.js TypeScript projects with enterprise-grade tooling and best practices.** 🚀
````
