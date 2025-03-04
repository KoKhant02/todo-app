# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the backend package.json and package-lock.json to the container
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code
COPY backend ./

# Expose the port the backend app runs on
EXPOSE 3000

# Command to run the backend application
CMD ["npm", "start"]
