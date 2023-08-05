var str = "x+y+xy+4x=7"
let countx = 0;
let county = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
        countx++;
    }
    if (str[i] == 'y') {
        county++
    }
}
console.log("x=" + countx)
console.log("y=" + county)