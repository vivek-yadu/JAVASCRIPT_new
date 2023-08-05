//task 1-a-1 
// let n = 17
// console.log("n=" + n)
// if (n % 2 == 1) {
//     n++;
// }
// console.log(n)


// //task 1-a-2

// let n = 37;
// if (n % 6 == 0) {
//     console.log("divisible by 6");
// } else if (n % 3 == 0) {
//     console.log("divisible by 3")
// } else if (n % 2 == 0) {
//     console.log("divisible by 2")
// } else {
//     console.log("Not divisible by 2,3 and 6")
// }


// //task 1-a-3
// var n = 6
// var str = ""
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         str = str + "J";
//     } else {
//         str += "K"
//     }
// }
// console.log(str)



//task 1-a-4

let n = 21
let count = 0;
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        count++;
    }
}

if (count == 0) {
    console.log('prime');
} else {
    console.log('composite')
}