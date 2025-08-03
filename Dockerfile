FROM node:24-alpine

RUN npm i -g bun

WORKDIR /app

COPY bun.lock package.json ./

RUN bun i
COPY . .
RUN bun run build

EXPOSE 8080

CMD ["bun", "run", "start", "--port", "8080"]
