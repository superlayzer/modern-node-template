#!/bin/bash

# Create New Node.js TypeScript Project Script
# This script creates a new project from this template

set -e

# Check if project name is provided
if [ $# -eq 0 ] || [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "🚀 Node.js TypeScript Project Creator"
    echo "====================================="
    echo ""
    echo "Usage: ./scripts/create-project.sh <project-name>"
    echo ""
    echo "Examples:"
    echo "  ./scripts/create-project.sh my-awesome-app"
    echo "  ./scripts/create-project.sh api-service"
    echo "  ./scripts/create-project.sh web-app"
    echo ""
    echo "This will:"
    echo "1. Create a new project directory"
    echo "2. Copy this template with all tooling"
    echo "3. Run the setup script automatically"
    echo "4. Configure everything for you"
    echo ""
    exit 0
fi

PROJECT_NAME=$1
TEMPLATE_DIR="$(pwd)"

# Check if project directory already exists
if [ -d "../$PROJECT_NAME" ]; then
    echo "❌ Error: Project directory '$PROJECT_NAME' already exists"
    exit 1
fi

echo "�� Creating new Node.js TypeScript project: $PROJECT_NAME"
echo "=================================================="

# Copy template to new project (go up one level first)
cd ..
cp -r "$(basename $TEMPLATE_DIR)" "$PROJECT_NAME"

# Navigate to new project
cd "$PROJECT_NAME"

# Remove template-specific files
echo "🧹 Cleaning up template files..."
rm -rf .git node_modules package-lock.json create-project.sh

# Run the setup script
echo "⚙️  Running setup script..."
./setup.sh

echo ""
echo "🎉 Project '$PROJECT_NAME' created successfully!"
echo ""
echo "To start working on your project:"
echo "cd $PROJECT_NAME"
echo "npm run dev"
echo ""
echo "Happy coding! 🚀"
