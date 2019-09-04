//normal function statement
const sayHello = () => {
	console.log('hi')
}

sayHello()

//Anonymous function
var sayBye = function() {
	console.log("Bye");
}

sayBye()

//passing in a function to a paramter
const call = (funcParam) => {
	funcParam()
}

//Call the function and pass in a function parameter.
call(sayBye)