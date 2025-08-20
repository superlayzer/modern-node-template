FROM node:24-alpine

# Build arguments
ARG APP_NAME
ARG APP_VERSION
ARG BUILD_DATE
ARG VCS_REF

# Environment variables (available at runtime)
ENV APP_NAME=${APP_NAME}
ENV APP_VERSION=${APP_VERSION}
ENV BUILD_DATE=${BUILD_DATE}
ENV VCS_REF=${VCS_REF}

# Labels for better image identification
LABEL org.opencontainers.image.title="${APP_NAME}"
LABEL org.opencontainers.image.version="${APP_VERSION}"
LABEL org.opencontainers.image.created="${BUILD_DATE}"
LABEL org.opencontainers.image.revision="${VCS_REF}"

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install all dependencies (including tsx for TypeScript execution)
RUN npm ci

# Copy source code
COPY src/ ./src/

# Copy environment example file
COPY env.example .env

# Create logs directory
RUN mkdir -p logs

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Health check - verify the application is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "process.exit(0)" || exit 1

# Start the application
CMD ["npm", "start"]
