//PIPES
///  Take data from read stream then pipe it to a write stream
//Pipe will automically pipe it instead of us listening for data events. Don't hve to manually listen or write. 

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/11.loremipsum.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/pipetext.txt');

//can only use .pipe on readable stream
myReadStream.pipe(myWriteStream);

