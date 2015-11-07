var chai = require('chai');
var expect = chai.expect;
var builder = require(__dirname + '/../lib/router.js');

describe('the builder function', function() {
  var myBuild = new builder();
  myBuild.set('/routename', 'GET', function(){return 'hello world'});

  it('it should save a route', function() {
    expect(myBuild.routes['GET']['/routename']()).to.eql('hello world');
    console.log(myBuild.routes['GET']['/routename']);
  });

  it('should retrieve a route', function() {
    expect(myBuild.retrieve('/routename', 'GET')).to.eql('hello world');
  });
});

