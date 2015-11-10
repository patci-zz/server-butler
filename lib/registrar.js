module.exports = function (router) {

  router.set('/', 'GET', 'index.html');

  router.set('/hello', 'GET', 'HELLO ...');

  router.set('/world', 'GET', '... WORLD');

  return router;
};

