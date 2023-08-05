let numbers = [2, 5, 10, 20, 35, 40, 45, 50, 60, 70, 80];
console.log(numbers)
    // let number = numbers.find((num, index) => {
    //     return num == 10
    // });
    // let index = numbers.findIndex((num, index) => {
    //     return num == 10
    // });
    // console.log(number)
    // console.log(index)



// Find number and index greater than 30
// let number = numbers.find((num, index) => {
//     return num > 30
// });
// let index = numbers.findIndex((num, index) => {
//     return num > 30
// });
// console.log(number)
// console.log(index)



// //  multiple of 3
// let number = numbers.find((num, index) => {
//     return num % 3 == 0;
// });
// let index = numbers.findIndex((num, index) => {
//     return num % 3 == 0;
// });

// console.log(number)
// console.log(index)


let number = numbers.filter((num) => {
    return num == 10;
})
console.log(number)

// let greater = numbers.filter((num) => {
//     return num >= 30;
// })
// console.log(greater)

// let multipleof3 = numbers.filter((num) => {
//     return num % 3 == 0;
// })
// console.log(multipleof3)