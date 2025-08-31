# Use Node.js 18 Alpine as base image for smaller size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 8080 (as configured in vite.config.ts)
EXPOSE 8080

# Start the application in preview mode
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8071"]
