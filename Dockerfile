# Step 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Step 2: Production image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./
RUN npm install --omit=dev

ENV PORT=4000

EXPOSE 4000

CMD ["npm", "start"]
