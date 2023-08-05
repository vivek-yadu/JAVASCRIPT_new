const data = [
    { name: "Jack", country: "USA", age: 35 },
    { name: "Amit", country: "India", age: 38 },
    { name: "Edward", country: "USA", age: 41 },
    { name: "Vishal", country: "India", age: 30 },
    { name: "Annie", country: "USA", age: 27 },
    { name: "Nick", country: "France", age: 32 },
    { name: "Francis", country: "France", age: 44 },
    { name: "Preeti", country: "India", age: 25 },
    { name: "Sophie", country: "France", age: 29 },
    { name: "Harpreet", country: "India", age: 48 },
    { name: "Bob", country: "USA", age: 21 }
]


// let filterIndia = data.filter((n) => {
//     return n.country == "India"
// })
// let findIndia = data.find((n) => {
//     return n.country == "India"
// })
// let findIdxIndia = data.findIndex((n) => {
//     return n.country == "India"
// })

// console.log(filterIndia)
// console.log(findIndia)
// console.log(findIdxIndia)



//7.2
// let filterIndia = data.filter((n) => {
//     return n.country == "India" && n.age < 35
// })
// let findIndia = data.find((n) => {
//     return n.country == "India" && n.age < 35
// })
// let findIdxIndia = data.findIndex((n) => {
//     return n.country == "India" && n.age < 35
// })

// console.log(filterIndia)
// console.log(findIndia)
// console.log(findIdxIndia)


//7.3

// let filterIndia = data.filter((n) => {
//     return n.country == "India" && n.name.length < 6
// })
// let findIndia = data.find((n) => {
//     return n.country == "India" && n.name.length < 6
// })
// let findIdxIndia = data.findIndex((n) => {
//     return n.country == "India" && n.name.length < 6
// })

// console.log(filterIndia)
// console.log(findIndia)
// console.log(findIdxIndia)

//7.4
// let filterIndia = data.filter((n) => {
//     return n.country == "India" || n.country == "USA"
// })
// let findIndia = data.find((n) => {
//     return n.country == "India" || n.country == "USA"
// })
// let findIdxIndia = data.findIndex((n) => {
//     return n.country == "India" || n.country == "USA"
// })

// console.log(filterIndia)
// console.log(findIndia)
// console.log(findIdxIndia)


//7.5
// function findMinAge(minArr) {
//     let min = 1000000000;

//     for (let i = 0; i < minArr.length; i++) {
//         if (min > minArr[i].age) {
//             min = minArr[i].age
//         }
//     }
//     return min
// }

// let minAge = findMinAge(data)

// let findGreaterThanMinAge = data.find((AGE) => {
//     return AGE.age > minAge
// })

// let findIndexGreaterThanMinAge = data.findIndex((AGE) => {
//     return AGE.age > minAge
// })
// let filterGreaterThanMinAge = data.filter((AGE) => {
//     return AGE.age > minAge
// })

// console.log(findGreaterThanMinAge)
// console.log(findIndexGreaterThanMinAge)
// console.log(filterGreaterThanMinAge)


//7.6
// function findCountry(str) {
//     let filterCountry = data.filter((a) => {
//         return a.country == str;
//     })
//     console.log(filterCountry)
// }
// findCountry('USA')