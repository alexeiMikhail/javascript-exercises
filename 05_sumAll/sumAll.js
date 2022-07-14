const sumAll = function(x,y) {
    sum = 0;
    if (x % 1 != 0 || y % 1 != 0 || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }
    for (x; x <= y; x++){
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
