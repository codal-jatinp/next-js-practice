FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma/ ./

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "./node_modules" ]

RUN npm run prisma:generate:docker

CMD [ "npm", "run", "dev" ]
