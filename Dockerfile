# Use the official Python image as the base image
FROM nikolaik/python-nodejs:python3.8-nodejs18-slim

# Set the working directory
WORKDIR /app

# Copy the Python requirements file
COPY src/flask-server/requirements.txt .

# Copy the Node.js package file
COPY package.json ./
COPY package-lock.json ./

# Install NPM packages
RUN npm ci

# Install Python packages
RUN pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Build React application
RUN npm run build

# Expose the port that your Flask app listens on
EXPOSE 5000

# Start the Flask app
CMD ["sh", "src/flask-server/start.sh"]