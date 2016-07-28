//EXPRESS
//easy and flexible routing system
//integrates with templating engines
//contains a middleware framework

var express = require('express');

//functino gives access to all different express methods
var app = express();


//Respond to request
//Discuss GET, POST, DELETE, PUT

//Examples
// app.get('route', fn);
// app.post('route', fn);
// app.delete('route', fn);


//Here are our routes & then fire functions that are extended by requests
app.get('/', function(req, res){
	//Use send method with the request - respond with a regular old string for now.
	res.send('Hey. You did it!');
});

app.get('/contactpage', function(req, res){
	res.send('Contact page!');
});

//listening to port. Nice!
app.listen(3000);

