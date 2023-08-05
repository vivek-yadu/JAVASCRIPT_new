let n = 2
var str = ""
for (let i = 1; i <= 2 * n; i++) {
    str = str + "XY" + i + (i + 1)
    i = i + 1;
}
console.log(str)