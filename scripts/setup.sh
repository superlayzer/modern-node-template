#!/bin/bash

# Node.js TypeScript Project Template Setup Script
# This script helps you quickly configure the template for your project

set -e

echo "🚀 Node.js TypeScript Project Template Setup"
echo "=============================================="

# Get project details
read -p "Enter your project name: " PROJECT_NAME
read -p "Enter your project description: " PROJECT_DESCRIPTION
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your name: " AUTHOR_NAME

# Update package.json
echo "📦 Updating package.json..."
npm pkg set name="$PROJECT_NAME"
npm pkg set description="$PROJECT_DESCRIPTION"
npm pkg set repository.url="git@github.com:$GITHUB_USERNAME/$PROJECT_NAME.git"
npm pkg set author="$AUTHOR_NAME"

# Update source code
echo "🔧 Updating source code..."
sed -i '' "s/your-project-name/$PROJECT_NAME/g" src/index.ts

# Initialize Git repository
echo "📁 Initializing Git repository..."
git init
git add .
git commit -m "feat: initial commit from template"

# Install dependencies
echo "�� Installing dependencies..."
npm install

# Setup Git hooks
echo "🪝 Setting up Git hooks..."
npm run prepare

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎉 Your project '$PROJECT_NAME' is ready!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Push your code: git remote add origin git@github.com:$GITHUB_USERNAME/$PROJECT_NAME.git"
echo "3. Push to GitHub: git push -u origin main"
echo "4. Start developing: npm run dev"
echo ""
echo "Happy coding! 🚀"
