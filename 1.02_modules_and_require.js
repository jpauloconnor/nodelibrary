//MODULES

//allow us to split our code up into logical modules
//call on the modules when we need them


var scream = function(hey){
	
	return hey;
};


var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';

};

console.log(scream("Hey!"));
console.log(counter(['Paul', 'James', 'Ben']));






//Set what you want to be available outside of the module
module.exports = scream;
module.exports = counter;
