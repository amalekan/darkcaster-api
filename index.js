const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

// dummy route for testing
server.get('/', (request, response) => {
  response.send('it works!');
});

server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
