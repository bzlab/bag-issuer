export const errorHandler = function (err, req, res, next) {
  console.error(err);
  res.status(500).send({ message: err.message || 'server error' });
};
