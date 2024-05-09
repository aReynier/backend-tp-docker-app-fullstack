FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 1992
CMD ["npx", "tsx", "src/server.ts"]