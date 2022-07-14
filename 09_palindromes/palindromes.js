const palindromes = function (str) {
    str = str.replace(/[^\w\']|_/g, "");
    str = str.toLowerCase();
    if (str.split("").reverse().join("") == str) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
