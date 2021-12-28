const leapYears = function(year) {

    // console.log(Math.floor(year/4));
    // console.log(year%4);


    if(year%4 === 0 && (year%100 !== 0 || (year/100)%4 === 0)){
        return true;
    }
    else{
        return false;
    }
};

// console.log(leapYears(700))

// Do not edit below this line
module.exports = leapYears;
