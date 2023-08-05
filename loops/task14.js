let n = 2
var str = ""
var ans = ""
for (let i = 1; i <= n; i++) {
    str = str + "@"
    ans = ans + i + str
}
console.log(ans)