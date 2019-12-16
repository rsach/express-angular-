#!/bin/bash
cd /app/api

npm install
cd /app/api
npm i -g pm2
npm i -g sequelize-cli
./node_modules/.bin/sequelize db:migrate
npm start
