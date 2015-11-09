"use strict";
var fs = require('fs');

function genHeaderStatus(string, response){
  var resData = {};

  if (string.indexOf(".json") != -1){
    response.setHeader("Content-Type", "application/json");
    resData.status = 200;

    return resData;

  }else if(string.indexOf(".html") != -1){
    response.setHeader("Content-Type", "text/html");
    resData.status = 200;

    return resData;
  }else{
    response.setHeader("Content-Type", "text/plain");
    resData.status = 200;

    return resData;
  }
};

module.exports.genHeaderStatus = genHeaderStatus;
