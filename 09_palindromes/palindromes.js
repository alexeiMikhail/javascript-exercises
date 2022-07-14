const palindromes = function (str) {
    if (str.split("").reverse().join("") == str) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
