const repeatString = function(someString, someInt) {
    if (someInt < 0) {
        return "ERROR"
    }
    return someString.repeat(someInt);
};

// Do not edit below this line
module.exports = repeatString;
