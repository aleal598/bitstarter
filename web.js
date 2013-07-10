#!/usr/bin/env node
var express = require('express');
var fs= required('fs');
var app = express.createServer(express.logger());
var data= new Buffer(128);
fs.readFileSync('index.html', function (err, data) {
    if (err) throw err;
    console.log(data);
});
app.get('/', function(request, response) {
    response.send(data.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});