const reverseString = function(input) {
    let word = ""
    for(let i = input.length - 1; i >= 0; i--) {
        word += input[i]
    }
    
    return word
};

// Do not edit below this line
module.exports = reverseString;
