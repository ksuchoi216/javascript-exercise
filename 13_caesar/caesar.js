const caesar = function(str, movetoNum) {
    arrs = str.split("");
    // console.log(arrs);
    let wordformat = /[\w]/;

    const map = arrs.map((arr) => {
        if (arr.match(wordformat)){
            code = arr.charCodeAt(0);
            movedCode = code + movetoNum;
            // console.log(movedCode)
            if (arr === arr.toUpperCase() && movedCode > 90) {
                movedCode -= 26;
            } else if (arr === arr.toLowerCase() && movedCode > 122) {
                movedCode -= 26;
            }
            // console.log(movedCode);
            movedChar = String.fromCharCode(movedCode);
            return movedChar;
        } else {
            return arr;
        }
    })

    return map.join("");
};

console.log(caesar('Mjqqt, Btwqi!', -5));
console.log("z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0)-"a".charCodeAt(0));
// Do not edit below this line
module.exports = caesar;
