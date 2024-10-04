# 1. Use an official Node.js image as the base
FROM node:18-alpine AS build

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install --frozen-lockfile

# 5. Copy the rest of the application code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Use an official Node.js image as the base for the final production image
FROM node:18-alpine AS runner

# 8. Set the working directory in the container
WORKDIR /app

# 9. Copy the built Next.js app from the build stage
COPY --from=build /app ./

# 10. Expose the port on which the app will run
EXPOSE 3000

# 11. Start the Next.js app
CMD ["npm", "run", "start"]
