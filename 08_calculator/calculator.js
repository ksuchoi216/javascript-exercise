const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arrs) {
  if (arrs.length === 0){
    return 0;
  }

  let sum = arrs.reduce(function (total, current){
    return total + current;
  });

  return sum;
};

const multiply = function(arrs) {
  if (arrs.length === 0){
    return 0;
  }

  let multiply = arrs.reduce(function (total, current){
    return total * current;
  });

  return multiply;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  if (num < 0){
    return -1;
  } else if (num == 0){
    return 1;
  } else {
    return (num * factorial(num-1));
  }
};
//calling test
// console.log(factorial(3));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
