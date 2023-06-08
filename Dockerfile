FROM node:latest

WORKDIR /app

COPY package.json .
COPY tsconfig.json .

RUN npm install

COPY src/database/migrations .

RUN npm run knex migrate:latest

COPY . .

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]
