const errorHandler = (err, request, response, next) => {
  response.status(500).json({
    message: "Uh oh! Something broke!"
  });
};

module.exports = errorHandler;
