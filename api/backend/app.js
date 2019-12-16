import express from 'express';

import path from 'path';







const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '/config/', 'config.json'))[env];


import models from './schemas'; //Do not remove. This initializes the DB Connection.

var app = express();
import body_parser from 'body-parser';

import http from 'http';
import express_validator from 'express-validator';



import api_routes from './routes/api';


var http_port = config.http_port;
var https_port = config.https_port;

import winston from 'winston';
import express_winston from  'express-winston';

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Length, Content-Type, Accept, Authorization');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};






app.use(body_parser.json({limit: '4MB'}));
app.use(body_parser.urlencoded({ extended: true, limit: '4MB' }));

app.use(express_validator());

app.use(allowCrossDomain);


process.env.TZ = 'UTC';

if(config.listen_http) {
  var http_server = http.createServer(app).listen(http_port, function () {
    console.log('HTTP server listening on port ' + http_server.address().port + ' env=' + env);
  });
} else {
  console.log('HTTP is not enabled as per the config...');
}





//Request Logger
app.use(express_winston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ],
  meta: true,
  expressFormat: true,
  colorize: true
}));



console.log('Initializing Routes..');
app.use('/api/', api_routes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));








// Error logger
app.use(express_winston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

