var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	if(req.url === "/home" || req.url === "/"){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/14.index.html').pipe(res);
	} else if (req.url === '/contact'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/16.contact.html').pipe(res);
	}
});


//local host & local address
server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");
