//Dhana Grace F. Bermudez
//WD - 201
//server.js

var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('Successfully created the second App!');
});

var server = app.listen(2001, 'localhost', function (){
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port);
}
);