var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Worldddddddd\n');
}).listen(8030);

console.log('Server started');


