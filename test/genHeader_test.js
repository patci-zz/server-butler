
var mocha = require('mocha');
var chai = require('chai');
var generate = require(__dirname + '/../lib/genHeaderStatus');


var expect = chai.expect;
var fs = require('fs');
var http = require('http');


describe('a function that takes a string and sets content header',function(){

  it('takes a string and appropriately modifies the content-type',function(){
    var response = {
        "header": {
        "Content-Type":"text/plain",
        "status":5,
      },

      setHeader: function(key, value){
        this["header"][key] = value;
      }
    };
    generate.genHeaderStatus("dummy-text", response);
    expect(response["header"]["Content-Type"]).to.eql('text/plain');
  });

  it('adds a 200 status', function(){
    var response = {
        "header": {
        "Content-Type":"text/plain",
        "status": 5,
      },

      setHeader: function(key, value){
        this["header"][key] = value;
      }
    };
    generate.genHeaderStatus("dummy-text", response);
    expect(response['header'].status).to.eql(200);
    expect(response['header']['Content-Type']).to.eql("text/plain");
  });
});
