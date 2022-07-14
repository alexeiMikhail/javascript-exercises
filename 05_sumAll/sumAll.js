const sumAll = function(x,y) {
    sum = 0;
    if (x % 1 != 0 || y % 1 != 0) {
        return "ERROR";
    }
    for (x; x <= y; x++){
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
