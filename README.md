# Node.js TypeScript Project Template

A modern Node.js TypeScript project template with enterprise-grade tooling and best practices.

## 🚀 Quick Start

### Option 1: Use the Create Script (Recommended)

```bash
# From the layzer directory
./create-project.sh my-awesome-app
```

This will:

1. Create a new project directory
2. Copy the template
3. Run the setup script automatically
4. Configure everything for you

### Option 2: Manual Setup

```bash
# Copy the template
cp -r node-typescript-template my-awesome-app
cd my-awesome-app

# Run the setup script
./setup.sh
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

## 🛠️ Tech Stack

- **Runtime**: Node.js 24+ with TypeScript
- **Package Manager**: npm 11+
- **Code Quality**: ESLint v9 + Prettier
- **Git Hooks**: Husky + lint-staged + commitlint
- **Development**: nodemon + tsx
- **Module System**: ES Modules

## 📦 Quick Start

### 1. Clone and Setup

```bash
# Clone this template
git clone <your-template-repo> your-project-name
cd your-project-name

# Install dependencies
npm install

# Setup Git hooks
npm run prepare
```

### 2. Update Project Details

```bash
# Update package.json
npm pkg set name="your-actual-project-name"
npm pkg set description="Your project description"
npm pkg set repository.url="git@github.com:yourusername/your-project-name.git"
npm pkg set author="Your Name"
```

### 3. Start Development

```bash
# Start development server
npm run dev

# Run production build
npm start

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
├── types/                # TypeScript type definitions
├── config/               # Configuration files
└── services/             # Business logic services

# Configuration Files
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint v9 flat config
├── .prettierrc          # Prettier configuration
├── nodemon.json         # Development server config
├── .lintstagedrc.js     # Pre-commit hooks
├── commitlint.config.js # Commit message rules
└── .husky/              # Git hooks
```

## 🔧 Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Run production build                     |
| `npm run dev`          | Start development server with hot reload |
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

- **Pre-commit**: Run ESLint and Prettier on staged files
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
```

## 🔗 Path Mapping

Use `@/*` aliases for clean imports:

```typescript
// Instead of
import { something } from '../../../utils/something';

// Use
import { something } from '@/utils/something';
```

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
3. **Check quality**: `npm run lint && npm run format:check`
4. **Commit changes**: `git commit -m 'feat: add amazing feature'`
5. **Push branch**: `git push origin feature/amazing-feature`
6. **Create PR**: Open pull request

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

- **Issues**: [GitHub Issues](https://github.com/yourusername/your-project-name/issues)
- **Documentation**: [Project Wiki](https://github.com/yourusername/your-project-name/wiki)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**This template provides a solid foundation for modern Node.js TypeScript projects with enterprise-grade tooling and best practices.** 🚀
