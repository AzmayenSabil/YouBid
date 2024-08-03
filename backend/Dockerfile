# Use Node.js 16.13.2 with Alpine Linux for a lightweight container
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the backend application
EXPOSE 3000

# Command to run the backend application
CMD ["nodemon", "server.js"]
