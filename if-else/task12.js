var n = 4
let str = ""
for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        str = str + "X";
    } else {
        str = str + "Y"
    }
    console.log(str)
}