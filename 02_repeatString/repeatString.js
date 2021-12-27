const repeatString = function(word, num) {
    let output='';
    while(num != 0){
        output+=word;
        num-=1
        console.log(num)
    }
    // console.log(output)s
    return output
};
// repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;
