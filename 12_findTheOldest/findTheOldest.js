const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    function howOld(person) {
        if (!person["yearOfDeath"]) {
            person["yearOfDeath"] = currentYear
        }
        return person["yearOfDeath"] - person["yearOfBirth"];
    }

    
    // console.log(currentYear);
    const reducer = (previous, current) => { 
        return howOld(previous) > howOld(current) ? previous : current;
    }

    return people.reduce(reducer, 1);

};

// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1066,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//   ]

// console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
