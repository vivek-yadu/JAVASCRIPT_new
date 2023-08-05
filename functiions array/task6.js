const students = [
    { name: "Jack", maths: 55, english: 60, science: 62 },
    { name: "Anita", maths: 62, english: 65, science: 56 },
    { name: "Thomas", maths: 68, english: 72, science: 75 },
    { name: "Steve", maths: 51, english: 56, science: 68 },
    { name: "Julia", maths: 47, english: 77, science: 72 },
    { name: "Mary", maths: 72, english: 55, science: 81 }
];
console.log(students)


// let studentLessThan50Maths = students.find((n) => {
//     return n.maths < 50
// })
// console.log(studentLessThan50Maths)


// var totalMark = [];

// function totalMarks(newArr) {
//     for (let i = 0; i < newArr.length; i++) {
//         let total = newArr[i].maths + newArr[i].english + newArr[i].science;
//         totalMark.push(total)
//     }
//     return totalMark

// }
// totalMarks(students)
// for (let i = 0; i < students.length; i++) {
//     students[i].totalMark = totalMark[i]
// }

// // console.log(students)

// let totalMarkMoreThan200 = students.find((a) => {
//     return a.totalMark > 200
// })

// console.log(totalMarkMoreThan200)



// let moreInMaths = students.find((n) => {
//     return n.maths > n.english
// })
// let moreInMathsIdx = students.findIndex((n) => {
//     return n.maths > n.english
// })
// console.log(moreInMaths)
// console.log(moreInMathsIdx)

// function moreThanN(n) {
//     let moreInMaths = students.find((a) => {
//         return a.maths > n
//     })
//     let moreInMathsIdx = students.findIndex((a) => {
//         return a.maths > n
//     })
//     console.log(moreInMaths)
//     console.log(moreInMathsIdx)
// }

// moreThanN(60)



// let studentLessThan50Maths = students.filter((n) => {
//     return n.maths < 50
// })
// console.log(studentLessThan50Maths)


// var totalMark = [];

// function totalMarks(newArr) {
//     for (let i = 0; i < newArr.length; i++) {
//         let total = newArr[i].maths + newArr[i].english + newArr[i].science;
//         totalMark.push(total)
//     }
//     return totalMark

// }
// totalMarks(students)
// for (let i = 0; i < students.length; i++) {
//     students[i].totalMark = totalMark[i]
// }

// // console.log(students)

// let totalMarkMoreThan200 = students.filter((a) => {
//     return a.totalMark > 200
// })

// console.log(totalMarkMoreThan200)


// 6.7
// let moreInMaths = students.filter((n) => {
//     return n.maths > n.english
// })
// console.log(moreInMaths)


// 6.8
// function moreThanN(n) {

//     let morethan = students.filter((a) => {
//         return a.maths > n
//     })

//     console.log(morethan)
// }

// console.log(moreThanN(62))

//6.9
// function moreThanN(n1, n2) {

//     let morethan = students.filter((a) => {
//         return a.maths > n1 && a.science > n2
//     })

//     console.log(morethan)
// }

// console.log(moreThanN(62, 75))