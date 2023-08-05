let arr = ["mB24x", "a4b6n7", "zzz2z"]
arr.sort(inASC)

function inASC(a, b) {
    let num1 = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= '0' && a[i] <= '9') {
            num1 += a[i]

        }
    }
    let num2 = ''
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= '0' && b[i] <= '9') {
            num2 += b[i]
        }
    }


    if (num1 > num2)
        return 1;
    else if (num2 > num1)
        return -1
    else
        return 0
}

console.log(arr)