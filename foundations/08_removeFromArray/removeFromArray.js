const removeFromArray = function(arr, ...excludedValues) {
    return arr.filter((e) => !excludedValues.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
