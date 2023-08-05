var str = "ABCasdDadsaABCDdadABCDABCDAD"
let str1 = 'ABCD'
let startpos = 0;
let count = 0;
for (let i = 0; i < str.length; i++) {
    let index = str.indexOf(str1, startpos)
    if (index >= 0) {
        count++;
        startpos = index + 1
    }
}
console.log(count)