# Server Butler
<a href="https://travis-ci.org/patci/server-butler"><img src="https://travis-ci.org/patci/server-butler.svg?branch=master"></a>

Server Butler is a picky, opinionated web framework that only handles GET requests*
<p>*It also handles files.</p>


# To use

Install with the command `npm install server-butler`
<br>
Pull into your server.js file with <br>
```var butler = require('server-butler')```
<br>
```require ('http')```
<br>
Set a route using <br>
```butler.set(route, method, content)``` <br>
Each argument should be a string.
<br>
route = the intended route, ie ```/``` or ```/hello/world```
<br>
method = 'GET', that's the only thing that works right now!
<br>
content = either a string ie 'hello world' or a filename relative to ../public

<p> Once your routes are established, use:</p>
  ```http.createServer(function(req, res) {```<br>
  ```butler.retrieve(req, res);```<br>
  ```});```
<p> and listen on your favorite port (see the example directory). Now when you open a browser and call a registered route, you'll see the specified content!

