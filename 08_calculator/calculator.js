const add = function(x, y) {
	return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(numArray) {
  var theSum = 0;
	for (let i = 0; i < numArray.length; i++) {
    theSum += numArray[i];
  }
  return theSum;
};

const multiply = function(numArray) {
  var theProduct = 1;
  for (var i = 0; i < numArray.length; i++) {
    theProduct *= numArray[i];
  }
  return theProduct;
};

const power = function(x, y) {
	return (x ** y);
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
