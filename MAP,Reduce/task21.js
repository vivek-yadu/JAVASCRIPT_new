let data = [{ "name": "Mary", "marks": [72, 65, 55, 71] },
    { "name": "Anita", "marks": [66, 70, 75, 53] },
    { "name": "Edward", "marks": [44, 54, 64, 58] },
    { "name": "Thomas", "marks": [62, 55, 65, 81] },
    { "name": "Robin", "marks": [41, 44, 47, 49] },
    { "name": "Sophia", "marks": [71, 73, 67, 77] },
    { "name": "Bruce", "marks": [52, 57, 61, 64] }
]

// function sortStudent(student) {
//     return student.sort(inASC)

//     function inASC(a, b) {
//         let totalA = a.marks.reduce((acc, curr) => {
//             return acc + curr;
//         }, 0)
//         let totatB = b.marks.reduce((acc, curr) => {
//             return acc + curr;
//         }, 0)

//         if (totalA > totatB) {
//             return 1
//         } else if (totatB > totalA) {
//             return -1
//         } else {
//             return 0;
//         }
//     }
// }


// console.log(sortStudent(data))


// function moreThan70(student) {
//     let count = student.filter((a) => {
//         let maxmarks = a.marks.reduce((acc, curr) => {
//             if (acc < curr) {
//                 return curr
//             } else if (acc > curr) {
//                 return acc
//             }

//         }, 0)
//         return maxmarks > 70
//     }).length;
//     return count;
// }

// console.log(moreThan70(data))


// let highestMarks = data.reduce((acc, curr) => {

//     let totalMark1 = acc.marks.reduce((a, b) => {
//         return a + b
//     }, 0)
//     let totalMark2 = curr.marks.reduce((a, b) => {
//         return a + b
//     }, 0)

//     if (totalMark1 > totalMark2) {
//         return acc
//     } else {
//         return curr
//     }
// })

// console.log(highestMarks)

// let newArr = data.map((st) => {
//     let totalMark = st.marks.reduce((acc, curr) => {
//         return acc + curr
//     }, 0)

//     let json = { names: st.name, totalMarks: totalMark }
//     return json
// })
// console.log(newArr)


// let newArr = data.map((st) => {
//     let maxmark = st.marks.reduce((acc, curr) => {
//         if (acc > curr)
//             return acc
//         else if (acc < curr)
//             return curr
//     }, 0)

//     let json = { names: st.name, maxmarks: maxmark }
//     return json
// })
// console.log(newArr)