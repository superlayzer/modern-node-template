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

# Customize application name (optional but recommended)
# Replace "Modern Node Template" with your app name in the workflow file
sed -i 's/Modern Node Template/Your App Name/g' .github/workflows/03-docker.yml

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

## ✨ Features

- **TypeScript** - Modern TypeScript with strict type checking
- **ESLint + Prettier** - Code quality and formatting
- **Husky + Conventional Commits** - Git hooks and commit standards
- **Vitest** - Fast unit testing with coverage
- **Path Mapping** - Clean imports with `@/*` aliases
- **ES Modules** - Modern module system
- **Hot Reload** - Development with nodemon + tsx
- **Winston Logging** - Structured logging
- **Docker Support** - Containerization with health checks
- **CI/CD Pipeline** - GitHub Actions for automated workflows
- **Semantic Versioning** - Automatic version bumping and releases

## 🛠️ Development

```bash
# Start development server
npm run dev

# Run tests
npm test              # Watch mode
npm run test:run      # Single run
npm run test:coverage # With coverage

# Check code quality
npm run lint
npm run format:check
```

## 🐳 Docker

```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run

# Development mode with volume mounting
npm run docker:dev
```

## 📁 Project Structure

```
src/
├── index.ts              # Main entry point
├── utils/                # Utility functions
├── config/               # Configuration files
├── __tests__/           # Test files
└── types/                # TypeScript types (create as needed)
```

## 🔧 Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Run production build                     |
| `npm run dev`          | Start development server with hot reload |
| `npm test`             | Run tests in watch mode                  |
| `npm run test:run`     | Run tests once (CI mode)                 |
| `npm run lint`         | Check code quality                       |
| `npm run format:check` | Check code formatting                    |
| `npm run docker:build` | Build Docker image                       |

## 📝 Conventional Commits

This project enforces conventional commit messages:

```bash
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: improve code structure
test: add tests
chore: maintenance tasks
```

## 🚀 CI/CD Pipeline

- **Automated Testing** - Runs on every push and PR
- **Semantic Releases** - Automatic version bumping based on commits
- **Docker Builds** - Automated container builds
- **Deployment** - Ready for your deployment platform

## 🌍 Environment Variables

```bash
# Copy example environment
cp env.example .env

# Edit with your values
NODE_ENV=development
APP_NAME=Your App Name          # This will be injected at Docker build time
LOG_LEVEL=info
```

**Note**: `APP_NAME` and `APP_VERSION` are automatically injected during Docker builds via GitHub Actions, so you don't need to set them in your `.env` file for production deployments.

## 📚 Development Workflow

1. **Create feature branch**: `git checkout -b feature/amazing-feature`
2. **Make changes**: Write your code
3. **Run tests**: `npm test`
4. **Check quality**: `npm run lint && npm run format:check`
5. **Commit changes**: `git commit -m 'feat: add amazing feature'`
6. **Push and create PR**: `git push origin feature/amazing-feature`

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**This template provides a solid foundation for modern Node.js TypeScript projects.** 🚀
