# Use Node.js 18 as the base image
FROM node:18.20.2


# Set the working directory inside the container
WORKDIR /app

# Copy application files
COPY package.json .
COPY server.js .
COPY index.html .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
