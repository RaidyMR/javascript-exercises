const fibonacci = function(length) {
    // convert string to integer
    if(!Number.isInteger(length)){
        length = parseInt(length)
    }

    // negative number
    if(length <= 0){
        return "OOPS"
    }
    
    // first 2 number
    if(length < 3) {
        return 1
    }

    // algorithm
    let a = 1
    let b = 1
    let temp

    for(let i = 0; i < length - 2; i++) {
        temp = b
        b += a
        a = temp
    }

    return b

};

// Do not edit below this line
module.exports = fibonacci;
