var n = 6

let ans = ""
let p = 0;
for (let i = 1; i <= n; i++) {

    if (i % 3 == 1) {
        ans = ans + "P" + i
    } else if (i % 3 == 2) {
        ans = ans + "Q" + i
    } else if (i % 3 == 0) {
        ans = ans + "R" + i
    }

}
console.log(ans)



// var n = 8;
// let a = 80
// var ans = ""
// for (let i = 1; i <= n; i++) {
//     var str = String.fromCharCode(a);
//     ans = ans + str + i;
//     a++
//     if (i % 3 == 0) {
//         a = 80
//     }
// }
// console.log(ans)