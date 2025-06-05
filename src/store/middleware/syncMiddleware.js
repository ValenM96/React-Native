const syncMiddleware = store => next => action => {

  return next(action);
};

export default syncMiddleware;
