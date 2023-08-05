var n = 7;
let str = ""
for (let i = 1; i <= n; i++) {

    if (i % 3 == 0) {
        str = 'x' + str
    } else {
        str = i + str
    }

}
console.log(str)