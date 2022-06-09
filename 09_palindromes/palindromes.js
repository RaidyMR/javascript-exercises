const palindromes = function (input) {
    // removing punctuations and space
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g; // remove all character [inside this sign]
    function removePunctuation(string) {
        return string.replace(regex, '');
    }

    const cleanInput = removePunctuation(input.toUpperCase())
    for(let i = 0; i < cleanInput.length; i++) {
        if(cleanInput[i] !== cleanInput[cleanInput.length - 1 - i]) {
            return false
        }
    }
    
    return true
};

// Do not edit below this line
module.exports = palindromes;
