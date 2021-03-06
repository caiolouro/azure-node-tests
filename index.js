// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World! I\'m Tagme!');
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });

var http = require('http');
var _ = require('lodash');
var async = require('async');
var mongoose = require('mongoose');

var server = http.createServer(function (request, response) {

    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello World!");

});

console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 8080;
server.listen(port);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if(_.isString('teste')) console.log('lodash testing');

console.log('mongoose.Types.ObjectId', mongoose.Types.ObjectId().toString());

async.auto({
    teste: function (callback) {
        console.log('funcao teste dentro do async');
        return callback();
    }
});

console.log("Server running at http://localhost:", port);