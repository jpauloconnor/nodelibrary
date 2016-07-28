//Review streams

//WRITEABLE STREAMS -- allow node js to write data to a stream
//READABLE STREAMS -- allow node to read data from a stream
//DUPLEX --can read and write to a stream

var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/11.loremipsum.txt');																					
var myReadStream = fs.createReadStream(__dirname + '/11.loremipsum.txt', 'utf8');

//*************add this to do a write stream***************/
var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt')
//Going to pass the data in chunks
//There's an event with createReadStream that allows us to listen to data

//every time file passes a chunk of data on, we listen

//we're splitting the loremipsum file to receive the data more quickly
//faster than the synch style earlier.
myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	//every time we get a chunk, we're going to write to a writestream.txt
	myWriteStream.write(chunk);
});


//Chunk is not in text -> add utf 8 above.



/*
var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	res.writeHead(200, {'content-type':'text/plain'});
	res.end('Hey friends');
});


//local host & local address
server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");

*/





