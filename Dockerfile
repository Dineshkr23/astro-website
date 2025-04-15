# Use the official Astro image or a lightweight Node.js image
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the project files
COPY . .

# Build the Astro site
RUN npm run build

# Use a lightweight web server for static files (Nginx or similar)
FROM nginx:alpine

# Copy the built site from the builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
