#!/usr/bin/env node
var fs = require('fs'); 
var express = require('express');
var app = express.createServer(express.logger());

var data= new Buffer(228);
data=fs.readFileSync('index.html');
app.get('/', function(request, response) {
response.send(data.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});