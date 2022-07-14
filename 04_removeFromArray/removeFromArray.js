const removeFromArray = function(arr) {
    var argArray = arguments;
    var newArray = [];
    var workingArray = arr;
    var deleteMe;

    for (let i = 1; i < argArray.length; i++) {
        deleteMe = argArray[i];
        for (let j = 0; j < workingArray.length; j++) {
            if (deleteMe !== workingArray[j]) {
                newArray.push(workingArray[j]);
            }
        }
        workingArray = newArray;
        newArray = [];
    }
    return workingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
