var n = 6
var str = ""
var count = 0
for (let i = 1; i <= n; i++) {

    if (i % 2 == 0) {
        str = str + "+" + i
        count = count + i;
    } else {
        count = count - i;
        str = str + "-" + i
    }

}
console.log(str + "=" + count)