/*jshint esversion: 6*/
const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('./middleware/logger')
//routers
const weatherRouter = require('./routers/weather.router');
//middlware use
server.use(logger);
server.use(weatherRouter);
// dummy route for testing
server.get('/', (request, response) => {
  response.send('it works!');
});

server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
