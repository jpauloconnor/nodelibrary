var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	res.writeHead(200, {'content-type':'application/json'});
	var myObject = {
		name: 'Ryu',
		job: 'Ninja',
		age: 29
	};
	res.end(JSON.stringify(myObject));
});


//local host & local address
server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");

