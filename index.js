/*jshint esversion: 6*/
const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//routers
const weatherRouter = require('./routers/weather.router');
server.use(weatherRouter);
// dummy route for testing
server.get('/', (request, response) => {
  response.send('it works!');
});

server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
