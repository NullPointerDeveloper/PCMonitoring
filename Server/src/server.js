var http = require('http');
var url = require("url");

function start(route, handle){
	
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("server.js Request for \'" + pathname + "\' received.");

		var response = route(handle, pathname, res);
		if (response &&
				'body' in response &&
				'encoding' in response &&
				'contentType' in response){
			
			res.writeHead(200, {'Content-Type': response.contentType});
			res.write(response.body, response.encoding);
		} else {
			res.writeHead(500);
		}
		
		res.end();
	}
	
	http.createServer(onRequest).listen(1337, '127.0.0.1');
	console.log('server.js Server running at http://127.0.0.1:1337');
  };
exports.start = start;