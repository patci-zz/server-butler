# Server Butler
<a href="https://travis-ci.org/patci/server-butler"><img src="https://travis-ci.org/patci/server-butler.svg?branch=master"></a>

Server Butler is a picky, opinionated web framework that only handles GET requests*
<p>*It also handles files.</p>


# To use

Install with the command `npm install server-butler`
<br>
Pull into your server.js file with `var butler = require('server-butler')`
<br>
Also `require ('http')` to setup your server
<br>
Set a route using `butler.set(route, method, content)` Each argument should be a string.
<br>
route = the intended route, ie '/' or '/hello/world'
<br>
method = 'GET', that's the only thing that works right now!
<br>
content = either a string ie 'hello world' or a filename relative to ../public

<p> Once your routes are established, use:</p>
 `http.createServer(function(req, res) {
  butler.retrieve(req, res);
})`
<p> and listen on your favorite port.  Now when you open a browser and call a registered route, you'll see the specified content!

