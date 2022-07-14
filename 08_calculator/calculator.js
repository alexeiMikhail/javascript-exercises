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

const factorial = function(x) {
	if (x == 0 || x == 1) {
    return 1;
  }
  var fact = 1;
  for (var i = x; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
