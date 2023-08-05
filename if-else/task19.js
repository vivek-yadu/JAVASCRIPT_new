var n = 9
var str1 = ""
var str2 = ""
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        str2 = str2 + i + "#"
    } else {
        str1 = str1 + i + "#"
    }
}

console.log("Divide:" + str2)
console.log("Not divide:" + str1)