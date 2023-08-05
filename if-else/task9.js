var n = 5
for (let i = 1; i <= n; i++) {
    let ans = i * i;
    if (ans % 2 == 0) {
        console.log("Square of " + i + "=" + ans + ':' + "even")
    } else {
        console.log("Square of " + i + "=" + ans + ':' + "odd")
    }
}