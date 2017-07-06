// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World! I\'m Tagme!');
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });

var http = require('http');

var server = http.createServer(function (request, response) {

    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);