// function large(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1
//     } else if (num2 > num1 && num2 > num3) {
//         return num2
//     } else {
//         return num3
//     }
// }
// console.log(large(3, 8, 4))


//task 1-a-2
// function replace(str, char1, char2) {
//     let newStr = ""
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] == char1) {
//             newStr += char2
//         } else {
//             newStr += str[i]
//         }
//     }
//     return newStr
// }

// console.log(replace("goood", 'o', 'i'))

//task 1-a-3

// function isSquare(num) {
//     for (let i = 0; i <= num; i++) {
//         let sq = i * i;
//         if (sq == num) {
//             return true
//         }
//     }
//     return false
// }

// console.log(isSquare(91))

//task 1-a-4
// function fact(num) {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }

// console.log(fact(4))

// function fact(num) {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial *= i;
//         console.log(factorial)
//     }

// }

// console.log(fact(6))


// A function is a group of reusable code which can be called anywhere in your program. 
// This eliminates the need of writing the same code again and again. It helps programmers 
// in writing modular codes. Functions allow a programmer to divide a
//  big program into a number of small and manageable functions.