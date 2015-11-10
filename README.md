# Server Butler

Server Butler is a picky, opinionated web framework that only handles GET requests*
<p>*It also handles files.</p>


# To use

Install with the command `npm install server-butler`
<p> Pull into your server.js file with `var butler = require('server-butler')`.</p>
<p> Also `require ('http')` to setup your server
<p> Set a route using `butler.set(route, method, content)` Each argument should be a string.</p>
<p> route = the intended route, ie '/' or '/hello/world' </p>
<p> method = 'GET', that's the only thing that works right now! </p>
<p> content = either a string ie 'hello world' or a filename relative to ../public</p>
<p>
<p> Once your routes are established, use:</p>
 `http.createServer(function(req, res) { </p>
    butler.retrieve(req, res);</p>
})`</p>
<p> and listen on your favorite port.  Now when you open a browser and call a registered route, you'll see the specified content!

