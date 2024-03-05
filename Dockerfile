# Use the official Python image as the base image
FROM nikolaik/python-nodejs:latest

# Set the working directory
WORKDIR /src/flask-server

# Copy the requirements file into the container
COPY req.txt .

# Install the required Python packages
RUN pip install -r req.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your Flask app listens on
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]