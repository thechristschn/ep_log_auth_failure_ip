exports.authFailure = function(hook_name, context, cb) {
  if (context.req.headers.authorization) {
    console.warn('Authentication failure from IP: %s', context.req.headers['x-forwarded-for']);
  }
  // continue with normal authFailure
  return cb([false]);
};
