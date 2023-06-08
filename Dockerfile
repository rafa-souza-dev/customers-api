FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .

RUN npm install

COPY . .

RUN npm run knex migrate:latest
RUN npm run build

EXPOSE $PORT

CMD [ "npm", "run", "start" ]
