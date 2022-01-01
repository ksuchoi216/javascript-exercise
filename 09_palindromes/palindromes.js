const palindromes = function (str) {

    let re = /[^a-zA-Z0-9]/g;
    let lowerStr = str.toLowerCase().replace(re, '');
    reverseStr = lowerStr.split('').reverse().join('');

    console.log(lowerStr);
    console.log(reverseStr);


    return reverseStr === lowerStr;
};


// console.log(palindromes('ZZZZ car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
