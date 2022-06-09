const removeFromArray = function(arr, ...del) {
    for(let i = 0; i < del.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === del[i]) {
                // remove *1 element from *j; * is parameter.
                arr.splice(j, 1)
            }
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
