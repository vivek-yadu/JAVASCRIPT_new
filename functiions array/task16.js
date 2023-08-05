let data = [{ "name": "Mary", "marks": [72, 65, 55, 71] },
    { "name": "Anita", "marks": [66, 70, 75, 53] },
    { "name": "Edward", "marks": [44, 54, 64, 58] },
    { "name": "Thomas", "marks": [62, 55, 65, 81] },
    { "name": "Robin", "marks": [41, 44, 47, 49] },
    { "name": "Sophia", "marks": [71, 73, 67, 77] },
    { "name": "Bruce", "marks": [52, 57, 61, 64] }
]


// let data1 = [...data]
// data1.sort(marksDESC)


// function marksDESC(a, b) {
//     let suma = 0
//     let sumb = 0
//     for (let i = 0; i < a.marks.length; i++) {
//         suma += a.marks[i]
//         sumb += b.marks[i]
//     }

//     if (suma > sumb) {
//         return -1
//     } else if (suma < sumb) {
//         return 1
//     } else {
//         return 0
//     }

// }
// console.log(data1)



// let data2 = [...data]
// data2.sort(marksDESC)

// function marksDESC(a, b) {
//     if (a.marks > b.marks) {
//         return 1
//     } else if (a.marks < b.marks) {
//         return -1
//     } else {
//         return 0
//     }
// }



// console.log(data2)

// // let data3 = [...]


// let data3 = [...data]

// data3.sort(marks)

// function marks(st, st1) {

//     let cutoff = 56
//     let a = 0;
//     let b = 0
//     for (let i = 0; i < st.marks.length; i++) {
//         if (st.marks[i] > cutoff) {
//             a++;
//         }
//         if (st1.marks[i] > cutoff) {
//             b++;
//         }
//     }
//     if (a > b)
//         return -1;
//     else if (b > a)
//         return 1
//     else
//         return 0
// }

// console.log(data3)

// function markGreaterThanMin(minTotal) {


//     let filterTotalMarkGreaterThan = data.filter((a) => {
//         let totalMark = 0;
//         for (let i = 0; i < a.marks.length; i++) {
//             totalMark += a.marks[i];
//         }

//         return totalMark > minTotal
//     })

//     return filterTotalMarkGreaterThan
// }

// console.log(markGreaterThanMin(250))


// let data3 = markGreaterThanMin(250)
// data3.sort(byTotalScore)

// function byTotalScore(a, b) {
//     let suma = 0;
//     for (let i = 0; i < a.marks.length; i++) {
//         suma += a.marks[i];
//     }
//     let sumb = 0;
//     for (let i = 0; i < b.marks.length; i++) {
//         sumb += b.marks[i];
//     }

//     if (suma > sumb) {
//         return 1;
//     } else if (suma < sumb)
//         return -1
//     else
//         return 0

// }