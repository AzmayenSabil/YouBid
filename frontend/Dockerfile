# Use Node.js 16.13.2 with Alpine Linux for a lightweight container
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5173 for the frontend application
EXPOSE 5173

# Command to run the frontend application
CMD ["npm", "run", "dev"]
