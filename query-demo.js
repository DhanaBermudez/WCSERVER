//Name:Dhana Grace Bermudez
//App Name:query-demo.js
//March 03, 2022
//Description: This program is to show Query string


var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log(req.query)
})

app.listen(8080);

var server = app.listen (1900, 'localhost', function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  })