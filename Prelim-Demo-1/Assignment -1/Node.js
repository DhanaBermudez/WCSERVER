var http = require('http'); //Import Node.js core module
var root = require('./root.js')
var about = require('./about.js')
var contact = require('./contact.js')
var userName = 'John Smith'

var server = http.createServer(function(request, response) {
  //create web server
  if (request.url == '/') { //check the URL of the current request

  //set response header
  response.writeHead(200, {'Content-type': 'text/html'});

  //set response content
  response.write('<html><body><h1><p>Welcome to my Node.js Application</h1></p></body></html>');
  response.write(root(userName));
  response.end();
}

else if (request.url == "/about") {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><body><h1><p>This is About Page </h1></p></body></html>');
  response.write(about(userName));
  response.end();
}

else if(request.url == "/contact") {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><body><h1><p>This is Contact Page</h1></p></body></html>');
  response.write(contact(userName));
  response.end();
}
else if(request.url == "/gallery") {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><body><h1><p>This is Gallery Page</h1></p></body></html>');
  response.end();
}
else
  response.end('Invalid Request!');

});
server.listen(1000);
console.log('Node.js web server at port 1000 is running..')

//Bermudez, Dhana Grace F.
//February 02, 2022
//WD201
