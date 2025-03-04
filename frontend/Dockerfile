# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the frontend package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY frontend ./

# Expose the port the frontend app runs on
EXPOSE 5173

# Command to run the frontend application
CMD ["npm", "run", "dev"]
