"use strict";
var fs = require("fs");
var generate = require(__dirname + "/genHeaderStatus");

//genContentHandler()
function handleContent(string, response){
  generate.genHeaderStatus(string, response);
  var resData;
  if(response.headers["content-type"] == "text/plain"){
    var resData = generate.genHeaderStatus(string, response);
    resData.data = string;
    response.write(resData.data);
    console.log("Plain text data sent to client");
    response.end(console.log("Response ended"));
  }else{
    fs.Stats(__dirname + "/../public/" +  string, function(err, stats){
      if(err != null){
        console.log("The string was a file. Sending file to client.")
        fs.readFile(__dirname + "/../public/" +  string, function(err, data){
          if(err) console.log(err);
          resData.data = data;
          response.write(resData.data);
          response.end(console.log("File data sent to client."));
        });
      }else{
        console.log("User asked for a file that doesnt exist.");
        response.setHeader(404, {"Content-Type": "text/plain"});
        resData.data = "404 Error: File not Found."
        response.write(resData.data);
        response.end(console.log("404 Error sent to client."))

      }
    });
  }
};





module.exports.handleContent = handleContent;
