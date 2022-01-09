FROM node:lts-alpine

WORKDIR /app

RUN apk add --no-cache bash

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD npm run start
