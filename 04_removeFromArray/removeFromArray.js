const removeFromArray = function(arr, toDelete) {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (toDelete != arr[i]){
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
