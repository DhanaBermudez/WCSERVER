//DHANA GRACE F. BERMUDEZ
//WD - 201
//express-get/server.js
//This program is a simple example of GET method


var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {
  //Prepare output in JSON format
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name,
    course:req.query.course,
    age:req.query.age,
    comments:req.query.comments
  };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(6060, 'localhost', function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});