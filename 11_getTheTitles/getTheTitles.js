const getTheTitles = function(books) {
    let result = new Array(books.length)
    let i = 0;
    for (const book of books) {
        result[i] = book["title"];
        i++;
    }
    return result;
};

// //call
// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
// // console.log(books);
// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
