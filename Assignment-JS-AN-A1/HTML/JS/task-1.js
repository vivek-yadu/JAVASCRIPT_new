let str = "HUMAN"
let len = str.length;
let newStr = ""
let ans = ""
for (let i = 0; i < len; i++) {
    newStr += 'x'
    ans += str[i] + newStr
}
console.log(ans)