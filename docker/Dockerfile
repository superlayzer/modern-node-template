# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files
COPY ../package*.json ./
COPY ../tsconfig.json ./

# Install all dependencies (including dev dependencies for TypeScript)
RUN npm ci

# Copy source code
COPY ../src/ ./src/

# Production stage
FROM node:24-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Copy package files and TypeScript config
COPY ../package*.json ./
COPY ../tsconfig.json ./

# Install all dependencies (including tsx for TypeScript execution)
RUN npm ci --ignore-scripts && npm cache clean --force

# Copy source code from builder stage
COPY --from=builder --chown=nodejs:nodejs /app/src ./src

# Copy environment example file
COPY --chown=nodejs:nodejs ../env.example .env

# Create logs directory
RUN mkdir -p logs && chown -R nodejs:nodejs logs

# Switch to non-root user
USER nodejs

# Start the application
CMD ["npm", "start"]
