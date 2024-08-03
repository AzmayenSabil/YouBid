# Use Node.js 16.13.2 with Alpine Linux for a lightweight container
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json file to the working directory
COPY package*.json server.js ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000 for the backend application
EXPOSE 3000

# Command to run the backend application
CMD ["node", "server.js"]
