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

## 🛠️ Tech Stack

- **Runtime**: Node.js 24+ with TypeScript
- **Package Manager**: npm 11+
- **Code Quality**: ESLint v9 + Prettier
- **Git Hooks**: Husky + lint-staged + commitlint
- **Development**: nodemon + tsx
- **Testing**: Vitest + coverage + UI
- **Module System**: ES Modules

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
docs: update README
style: format code
refactor: simplify user service
test: add unit tests
chore: update dependencies

````

## 🔗 Path Mapping

Use `@/*` aliases for clean imports:

```typescript
// Instead of
import { something } from '../../../utils/something';

// Use
import { something } from '@/utils/something';
````

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
