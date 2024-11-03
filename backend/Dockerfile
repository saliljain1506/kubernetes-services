# Backend Dockerfile
FROM python:3.9-slim

# Install necessary packages
RUN pip install flask requests

# Copy the application files
COPY app.py /app.py

# Expose the port Flask will run on
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]

