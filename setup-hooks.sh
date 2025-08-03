#!/bin/bash

# Setup script for git hooks to ensure build quality

echo "🔧 Setting up git hooks for build quality..."

# Create .git/hooks directory if it doesn't exist
mkdir -p .git/hooks

# Copy pre-push hook
cp .githooks/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-push

echo "✅ Pre-push hook installed successfully!"
echo ""
echo "📋 What this hook does:"
echo "   • Runs TypeScript compilation check"
echo "   • Verifies build succeeds"
echo "   • Checks build output structure"
echo "   • Runs linting (non-blocking)"
echo "   • Runs tests (non-blocking)"
echo "   • Prevents push if critical errors found"
echo ""
echo "🚀 Now every 'git push' will be quality-checked first!"
