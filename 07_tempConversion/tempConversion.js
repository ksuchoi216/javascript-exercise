const ftoc = function(Fer) {
  return Math.round((Fer-32)*(5/9)*10)/10;
};

const ctof = function(Cel) {
  return Math.round((Cel*(9/5)+32)*10)/10;
};
// console.log(ftoc(32));
// console.log(ftoc(100));
// console.log(ftoc(-100));
// console.log(ctof(0));
// console.log(ctof(73.2));
// console.log(ctof(-10));


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

console.log(module)