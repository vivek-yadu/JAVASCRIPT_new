var n = 6

let ans = ""
let p = 0;
for (let i = 1; i <= n; i++) {

    if (i % 3 == 1) {
        ans = ans + "A" + i
    } else if (i % 3 == 2) {
        ans = ans + "B" + i
    } else if (i % 3 == 0) {
        ans = ans + "C" + i
    }

}
console.log(ans)