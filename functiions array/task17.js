let arr = ['aa', 'car', 'is', 'going']

arr.sort(inASC)

function inASC(a, b) {
    let counta = 0
    let countb = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 'a' && a[i] <= 'c') {
            counta++;
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= 'a' && b[i] <= 'c') {
            countb++;
        }
    }

    if (counta > countb)
        return 1
    else if (countb > counta)
        return -1
    else
        return 0

}
console.log(arr)