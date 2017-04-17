"use strict";
var fs = require("fs");
var generate = require(__dirname + "/genHeaderStatus");
var http = require('http');


function genJsonResponse(string, response){
  var resData = generate.genHeaderStatus(string, response);
  fs.readFile(__dirname + string, function(err, data){
    if(err) throw err;
    resData.data = data;
    response.write(resData.data);
    console.log("Json data sent to client");
    response.end(console.log("Response ended"));
  });

};

function genHtmlResponse(string, response){
  var resData = generate.genHeaderStatus(string, response);
  fs.readFile(__dirname + string, function(err, data){
    if(err) throw err;
    resData.data = data;
    response.write(resData.data);
    console.log("HTML data sent to client");
    response.end(console.log("Response ended"));
  });

};

function genPlainTextResponse(string, response){
  var resData = generate.genHeaderStatus(string, response);
  resData.data = data;
  response.write(resData.data);
  console.log("Plain text data sent to client");
  response.end(console.log("Response ended"));
};

function gen404ErrResponse(string, response){
  var resData;
  resData.data = "404 Error: File Not Found";
  resData.status = 404;
  response.setHeader(resData.status, {"Content-Type": "text/plain"});
  response.write(resData.data);
  response.end(console.log("Response ended"))
};

module.exports.genJsonResponse = genJsonResponse;
module.exports.genHtmlResponse = genHtmlResponse;
module.exports.genPlainTextResponse = genPlainTextResponse;
module.exports.gen404ErrResponse = gen404ErrResponse;
