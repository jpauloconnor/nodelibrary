var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	if(req.url === "/home" || req.url === "/"){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/1.13_index.html').pipe(res);
	} else if (req.url === '/contact'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/1.15_contact.html').pipe(res);
	} else if (req.url === '/api/ninjas'){
		var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(ninjas));
	} else {
		res.writeHead(404, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/1.15_404.html').pipe(res);
	}
});


//local host & local address
server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");
