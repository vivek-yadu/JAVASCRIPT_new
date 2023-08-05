const arr = [{ "name": "Mark", "age": 23 },
    { "name": "Steve", "age": 28 },
    { "name": "Mary", "age": 25 },
    { "name": "Bill", "age": 34 }
];


let sumAge = arr.reduce((acc, curr) => {
    return acc + curr.age
}, 0)

console.log(sumAge)

let moreThan27 = arr.reduce((acc, curr) => {
    let minage = curr.age
    if (minage > 27) {
        return acc + 1
    } else {
        return acc
    }
}, 0)
console.log(moreThan27)


//youngest person
let youngestPerson = arr.reduce((acc, curr) => {
    if (acc.age < curr.age) {
        return acc
    } else
        return curr
})
console.log(youngestPerson)


//oldest person 
let oldestPerson = arr.reduce((acc, curr) => {
    if (acc.age > curr.age) {
        return acc
    } else
        return curr
})

console.log(oldestPerson)


// count Name starts with  M 

let countM = arr.reduce((acc, curr) => {
    if (curr.name[0] == 'M') {
        return acc + 1
    } else
        return acc
}, 0)

console.log(countM)