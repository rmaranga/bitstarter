var express = require('express');

var app = express.createServer(express.logger());

//read file from index.html using fs.readFileSync and read the generated buffer.

var myindex = 'index.html';
var fs = require('fs');
var buf = new Buffer(fs.readFileSync(myindex));
var helloworld = buf.toString('utf8');

app.get('/', function(request, response) {
  response.send(helloworld);
});

// helloworld displays new text.

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
