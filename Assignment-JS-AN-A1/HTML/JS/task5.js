let str = "5y+10=40"


let c = str.substring(0, str.indexOf("y"));
let operator = str.substring(str.indexOf("y") + 1, str.indexOf("y") + 2);
let d = str.substring(str.indexOf(operator) + 1, str.indexOf("="));
let m = str.substring(str.indexOf("=") + 1);

if (operator == '-') {
    y = (m + d) / c
} else {
    y = (m - d) / c
}

console.log(y)