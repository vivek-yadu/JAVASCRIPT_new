let names = ["John", "Paul", "George", "Ringo", "William", "Harry", "Meghan"];
console.log(names)

// // Find name and index with length greater than 5
// let nameLength = names.find((name) => { return name.length > 5 });
// let indexLength = names.findIndex((name) => { return name.length > 5 });

// console.log(nameLength)
// console.log(indexLength)

// Find name and index starting with 'P'
// let nameStartingWithP = names.find((name) => { return name[0] == 'P'; });
// let indexStartingWithP = names.findIndex((name) => { return name[0] == 'P'; });

// console.log(nameStartingWithP);
// console.log(indexStartingWithP);

//starts with character provided as parameter 
// function startsWith(char) {
//     let nameStart = names.find((name) => { return name[0] == char; });
//     let indexStart = names.findIndex((name) => { return name[0] == char; });
//     console.log(nameStart)
//     console.log(indexStart)
// }

// startsWith('G')
// startsWith('J')


let namesCopy = [...names]


// let nameLongerThan5 = namesCopy.filter((name) => {
//     return name.length > 5
// })
// console.log(nameLongerThan5)

// let namesWithP = namesCopy.filter((name) => {
//     return name[0] == 'P'
// })
// console.log(namesWithP)


function startsWith(char) {
    let nameLongerThan5 = namesCopy.filter((name) => {
        return name[0] == char
    })
    return nameLongerThan5;
}

console.log(startsWith('P'))
console.log(startsWith('G'))