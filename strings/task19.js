var str = "ABCDE"
var mid = str.length / 2;
let a = mid * 10;
let remain = a % 10;
mid = (a - remain) / 10;
console.log("Middle Char = " + str[mid])
console.log("index= " + mid)