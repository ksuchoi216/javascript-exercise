const removeFromArray = function(arr, ...numbers) {
    // console.log(arr);
    // console.log(numbers[1]);
    // console.log(typeof(numbers));
    
    
    // console.log(id)
    // console.log(arr.splice(id, 1))
    // console.log(arr)

    for (let i=0; i<numbers.length; i++){
        let id = arr.indexOf(numbers[i]);
        // console.log(id)
        if (id >= 0){
            arr.splice(id, 1)
        }
        
        // console.log(arr)
    }

    // console.log(arr)
    return arr
};

removeFromArray([1, 2, 3, 4], "test");
// Do not edit below this line
module.exports = removeFromArray;
