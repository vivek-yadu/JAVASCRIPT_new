let data = [{ "fname": "Jack", "lname": "Smith", "city": "London" },
    { "fname": "Mary", "lname": "Markle", "city": "London" },
    { "fname": "Ed", "lname": "May", "city": "Paris" },
    { "fname": "Tim", "lname": "Gates", "city": "Rome" }
];

// let count = data.reduce((acc, curr) => {
//     if (curr.city == "London") {
//         return acc + 1;
//     } else {
//         return acc;
//     }
// }, 0);

// console.log(count);


// function peopleInCity(jsonArray, city) {
//     return jsonArray.reduce((acc, currentValue) => {
//         if (currentValue.city == city) {
//             return acc + 1;
//         } else {
//             return acc;
//         }
//     }, 0);
// }

// console.log(peopleInCity(data, "London"))

// function personsCity(people, firstName) {

//     let person = people.find((st) => {
//         return st.fname == firstName
//     });
//     if (person) {
//         return person.city
//     }

// }

// console.log(personsCity(data, "Jack"))