var str = 'mmoo zoom'
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'm') {
        count++;
    }
}
console.log(count);