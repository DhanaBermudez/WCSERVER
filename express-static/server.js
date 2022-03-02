//DHANA GRACE F BERMUDEZ
//WD-201
//express-static/server.js
//This program is to show built-in middleware referred to as static to serve static files on endpoints, such as graphics or images, CSS, JavaScript, etc.


var express = require('express');

var app = express();

app.use(express.static('public'));
app.get('/', function(req, res){
  res.send('Successfully created the second App!');
});

var server = app.listen(2010, 'localhost', function (){
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port);
}
);