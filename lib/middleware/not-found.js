const notFound = (req, res, next) => {
  console.log('not_found');
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

export default notFound;
