// //task 1-a1
// var str = "zkzkajajkz"
// let len = str.length
// let count = 0
// for (let i = 0; i < len; i++) {
//     if (str[i] == 'z') {
//         count++;
//     }
// }
// console.log(count)


//task 1 a-2
// let str = 'Abc'
// let len = str.length
// let newStr = ""
// for (let i = 0; i < len; i++) {
//     newStr += str[i] + str[i];
// }
// console.log(newStr)


// //task 1-a-3
// let str = "hj@3$251HN"
// let len = str.length
// let alpha = ""
// let digit = ""
// let rest = ""
// for (let i = 0; i < len; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//         alpha = alpha + str[i];
//     } else if (str[i] >= 'A' && str[i] <= "Z") {
//         alpha = alpha + str[i];
//     } else if (str[i] >= '0' && str[i] <= '9') {
//         digit += str[i]
//     } else {
//         rest += str[i]
//     }
// }

// console.log(alpha, digit, rest)


//task 1-a-4
// var str = "a##f##ds#"
// let len = str.length
// let out = ''
// for (let i = 0; i < len; i++) {
//     let ch = str[i]
//     let prevch = str[i - 1]
//     if (ch == '#') {
//         if (prevch == "#") {

//         } else {
//             out = out + ch;
//         }
//     } else {
//         out = out + ch;
//     }
// }
// console.log(out)


// //task 1-a-5
// let str1 = 'YesNoYesNoYes'
// let str2 = 'Yes'
// let count = 0;
// let startPos = 0
// for (;;) {
//     let index = str1.indexOf(str2, startPos);
//     if (index >= 0) {
//         count++;
//         startPos = index + 1;
//     } else {
//         break
//     }
// }
// console.log(count)


// Task 1-a-6

// let str = "I am learning JavaScript"
// let sep = ' '
// let startPos = 0;
// for (;;) {
//     let index = str.indexOf(sep, startPos);
//     if (index >= 0) {
//         let word = str.substring(startPos, index);
//         console.log(word);
//         startPos = index + 1;
//     } else {
//         let word = str.substring(startPos)
//         console.log(word)
//         break;
//     }
// }