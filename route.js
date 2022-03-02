//Dhana Grace F. Bermudez
//WD - 201
//this program showsto determining how an app may respond to clients' requests specifying a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

var express = require('express');
var app = express();

//This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("There is GET request for the homepage!");
  res.send('Here is the GET Method!');
})

//This responds a POST request for the homepage
app.post('/', function(req, res) {
  console.log("A POST request for the homepage is accessed.");
  res.send('Here is the POST Method');
})

//This responds a GET request for the /list_user page.
app.get('/list_user', function(req, res) {
  console.log("Got a GET request for /list_user");
  res.send('This is Page Listing');

})

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Pattern Match Page');
})

//This responds a GET request for /dhana
app.get('/dhana', function(req, res) {
  console.log("Got a GET request for /dhana");
  res.send('Name: Dhana Grace Bermudez <br/> Course: BSIT with Area Specialization of Web Development <br/> Department:School of Computing');
})


var server = app.listen(4000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})