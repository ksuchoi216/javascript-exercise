const fibonacci = function(num) {
    if (num <= 1){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2)
};

console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
