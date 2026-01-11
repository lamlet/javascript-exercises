const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    let a = 1;
    let b = 1;
    let temp;

    while (n > 2) {
        temp = b;
        b = a + b;
        a = temp;
        n--;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
