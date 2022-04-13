/**
 * Format for error responses
 * @param {number} code - status code
 * @param {* | undefined} error - error detail message
 * @param {* | undefined} message simple message
 * @return {typeof {code: number, error: any, message: any}
 */
const errorMsg = (code, error, message) => {
  return { code, error: error ?? {}, message: message ?? "" };
};

const notFound = (req, res, next) => {
  const error = { message: `🔍 - Not Found - ${req.originalUrl}` };
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  console.log(err);
  const { code, error, message } = err;
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(code ?? status).send(errorMsg(code ?? status, error, message));
};

module.exports = {
  errorHandler,
  notFound,
};
