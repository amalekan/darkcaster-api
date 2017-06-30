/*jshint esverion: 6*/
const logger = (request, response, next) => {
  const url = request.url;
  const method = request.method;
  const now = new Date();
  const message = `${method}:${url} - ${now}`;
  console.log(message);
  next();
};

module.exports = logger;
