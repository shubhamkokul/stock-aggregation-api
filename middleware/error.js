const ErrorResponse = require('../util/errorResponse');
const errorHandler = (error, req, res, next) => {
  let localError = { ...error };
  localError.message = error.message;
  console.log(error.stack);
  if (error.name === 'ParamsRequired') {
    const message = `Params are incorrect ${error.value}`;
    localError = new ErrorResponse(message, 400);
  }
  res.status(localError.statusCode || 500).json({
    success: false,
    error: localError.message || 'Server Error'
  });
};

module.exports = errorHandler;
