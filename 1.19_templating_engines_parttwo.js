//EXPRESS
//easy and flexible routing system
//integrates with templating engines
//contains a middleware framework

var express = require('express');

//function gives access to all different express methods
var app = express();
app.set('view engine', 'ejs');
//By default when we request, it will look in views folder.


//Respond to request
//Discuss GET, POST, DELETE, PUT

//Examples
// app.get('route', fn);
// app.post('route', fn);
// app.delete('route', fn);

//Here's how to serve up whole files.
app.get('/', function(req, res){
	res.sendFile(__dirname + '/1.13_index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/1.15_contact.html');
});

//INJECTING DYNAMIC CONTENT
//Need to install ejs 
//Tell express that we want to use ejs as our view engine


app.get('/profile/:name', function(req, res){

	var data = {age: 29, job: "ninja", hobbies: ["fighting", "running", "training"]};
			//say what the name of the view is in the param
	res.render("profile", {person: req.params.name, data: data});//now passing that into profile view
});
//Test this by entering a url with a parameter ----> http://localhost:3000/profile/name


//listening to port. Nice!
app.listen(3000);

