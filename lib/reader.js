function read(req, obj) {
  // split path into array
  var path = req.url.split('/');
  var newObj = {};
  // loop through each path in array and return the object it contains
  for (i=1;i<path.length;i++){
    newObj = obj[path[i]];
    obj = newObj;
  };
  // final path object callback
  return newObj.cb();
};

module.exports = read;

