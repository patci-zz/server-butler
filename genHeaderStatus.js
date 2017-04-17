"use strict";
var fs = require('fs');

function genHeaderStatus(string, response){
  var resData = {};

  if (string.indexOf(".json") != -1){
    response.writeHead(200,{"Content-Type": "application/json"});
    resData.data = undefined;
    resData.status = 200;

    return resData;

  }else if(string.indexOf(".html") != -1){
    response.writeHead(200, {"Content-Type": "text/html"});
    resData.data = undefined;
    resData.status = 200;

    return resData;
  }else{
    response.writeHead(200, {"Content-Type": "text/plain"});
    resData.data = undefined;
    resData.status = 200;

    return resData;
  }
};

module.exports.genHeaderStatus = genHeaderStatus;
