var str = "AB CD js"
let str1 = "ABCD"
var startpos = 0;

let index = str.indexOf(str1, startpos)
if (index == 0) {
    console.log("Start with ABCD")
} else {
    console.log("Does not Start")
}