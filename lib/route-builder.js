"use strict";
var fs = require("fs");
var cachePath = __dirname + '/route-cache.json';

/*
(if the route cache.json does not exist)
    create the route-cache.json file
    create a routes object with get, post etc objects in it
    build our new route object
    search through the routes object for the appropriate method,
    then attach the route object
    write the routes object back to the json object
    return routes object
if(check to see if route cache.json exists, if it does)
    read from the file and attach the json object from the file to a variable in the builder called routes
    build our new route object
    search through the routes object for the appropriate method, then attach the route object
    write the routes object back to route-cache.json
    return routes object
*/

var routeBuilder = module.exports = exports = function(){
  this.routes = {
    'GET': {},
    'POST':{},
    'PUT':{},
    'PATCH':{},
    'DELETE':{}
  };
};

routeBuilder.prototype.set = function(route, method, cb) {
  if (this.routes[method] == undefined){
    console.log("The method does not exist. Please choose another.");

  }else{
    fs.stat(cachePath, function(error, stats){
      if (error != null){
        console.log("route-cache does not exist");
        fs.writeFile(indexPath, function(err){
          if (err) throw err;
          console.log("route-cache.js was created");
        });

       this.routes['GET'][route] = cb;
       var writeStream = fs.createWriteStream(cachePath);
       writeStream.write(routes);
       writeStream.end();

       return routes;

    }else{
      console.log("route-cache exists");
      fs.readFile(cachePath, 'utf8', function (err, data) {
        console.log("read route-cache from file");
        if (err) throw err;
        routes = JSON.parse(data);
      });

      this.routes['GET'][route] = cb;
      var writeStream = fs.createWriteStream(cachePath);
      writeStream.write(routes);
      writeStream.end();

      return routes;
    }
   });
  }
};

