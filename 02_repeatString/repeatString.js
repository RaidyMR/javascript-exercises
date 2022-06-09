const repeatString = function(input, number) {
    if(number < 0) {
        return 'ERROR'
    }

    let word = ''
        for(let i = 0; i < number; i++) {
        word += input
    }

    return word
};

// Do not edit below this line
module.exports = repeatString;
