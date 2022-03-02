//DHANA GRACE F. BERMUDEZ
//WD 201
//firstapp.js
//March 03, 2022
//This is the program to for Creating and Running a Simple Express Application

var express = require("Express");
var app = express();

app.get("/", function(request, response) {
  response.send("Hello World!");
});

app.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});