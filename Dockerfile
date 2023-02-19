FROM node:latest

WORKDIR /usr/app

COPY package.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run knex migrate:rollback --all
RUN npm run knex migrate:latest

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]
