module.exports = function (router) {

  router.set('/', 'GET', {
    'content': 'Welcome to website'
  });

  router.set('/hello', 'GET', {
    'content': 'HELLO ...'
  });

  router.set('/world', 'GET', {
    'content': '... WORLD'
  });

  return router;
};
//fs.writeFile(__dirname + '/../json/routes.json', JSON.stringify(routes.routes), function(err) {
//  if (err) throw err;
//  console.log('All done');
//});

