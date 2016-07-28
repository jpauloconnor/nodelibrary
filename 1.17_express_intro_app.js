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

//Something more specific

app.get('/profile/:id', function(req, res){
	res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.get('/profile/:name', function(req, res){
	res.send('You requested to see a profile with the name of ' + req.params.name);
});
//Test this by entering a url with a parameter ----> http://localhost:3000/profile/86788


//listening to port. Nice!
app.listen(3000);

