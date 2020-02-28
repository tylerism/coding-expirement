var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Does this work? Maybe. Hi there! I am Tyler. Cool beans, Kubernetes Deployments manage stateless services running on your cluster. Their purpose is to keep a set of identical pods running and upgrade them in a controlled way – performing a rolling update by default\n');
}).listen(8030);

console.log('Server started');


