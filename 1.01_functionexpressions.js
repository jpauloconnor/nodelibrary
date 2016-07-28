//normal function statement

function sayHi(){
	console.log('hi');
}

sayHi();

//Anonymous function
var sayBye = function(){
	console.log("Bye");
};

sayBye();


//passing in a function to a paramter
function callFunction(funcParam){
	funcParam();
}


//Call the function and pass in a function parameter.
callFunction(sayBye);


