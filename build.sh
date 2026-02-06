#!/bin/bash

# Build script for Polytoria-Web
# Compiles TypeScript and copies necessary files to dist/

set -e  # Exit on error

echo "Building Polytoria-Web..."

# Clean dist directory
echo "Cleaning dist directory..."
rm -rf dist
mkdir -p dist

# Compile TypeScript
echo "Compiling TypeScript..."
npx tsc

# Copy WASM files
echo "Copying WASM files..."
mkdir -p dist/lua/wasm
cp src/lua/wasm/*.wasm dist/lua/wasm/ 2>/dev/null || echo "No .wasm files found in src/lua/wasm/"
cp src/lua/wasm/*.js dist/lua/wasm/ 2>/dev/null || echo "No .js files found in src/lua/wasm/"

#echo "Copying static assets..."
#cp index.html dist/
#cp styles.css dist/

echo "Build complete! Output in dist/"
