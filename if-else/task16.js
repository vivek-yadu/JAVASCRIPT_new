var n = 9
var str = ""

for (let i = 1; i <= n; i++) {

    if (i % 2 == 0) {
        str = str + "+" + i
    } else {
        str = str + "-" + i
    }

}
console.log(str)