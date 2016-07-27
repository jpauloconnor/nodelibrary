var counter = function(arr){
	return 'There are ' + arr.length + 'elements in the array';
};


var adder = function(a,b){
	var x = a + b;
	return "The sum is " + x;
};


var pi = 3.142;


//Long way
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//refactored way to export with an object

module.exports = {
	counter : counter,
	adder : adder,
	pi : pi
};


