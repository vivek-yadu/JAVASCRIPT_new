let data = [
    { "name": "Jack", "maths": 55, "english": 60, "science": 62 },
    { "name": "Anita", "maths": 62, "english": 65, "science": 56 },
    { "name": "Thomas", "maths": 68, "english": 72, "science": 75 },
    { "name": "Steve", "maths": 51, "english": 56, "science": 68 },
    { "name": "Julia", "maths": 47, "english": 77, "science": 72 },
    { "name": "Mary", "maths": 72, "english": 55, "science": 81 }
]



let newArr = []
const math60 = data.reduce((acc, curr) => {
    let t1 = curr.maths + curr.science + curr.english

    if (t1 < 200) {
        acc.push(curr);
    }
    return acc;

}, newArr);

console.log(math60);


// let sumMaths = data.reduce((acc, curr) => {

//     return acc + curr.maths

// }, 0)

// console.log(sumMaths)



// let countScience = data.reduce((acc, curr) => {
//     if (curr.science > 60) {
//         return acc + 1
//     } else {
//         return acc
//     }
// }, 0)

// console.log(countScience)



// let highestEnglish = data.reduce((acc, curr) => {

//     if (acc.english > curr.english) {
//         return acc
//     } else
//         return curr

// })

// console.log(highestEnglish)

// let newArr = []
// const math60 = data.reduce((acc, curr) => {
//     if (curr.maths > 60) {
//         acc.push(curr);
//     }
//     return acc;

// }, newArr);

// console.log(math60);