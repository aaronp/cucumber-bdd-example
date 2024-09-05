FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Install additional dependencies for Puppeteer
RUN apt-get update && \
    apt-get install -y wget --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Run the tests and generate the PDF
CMD ["npm", "run", "test:pdf"]
