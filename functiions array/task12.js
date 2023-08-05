// let array = [5, 2, 3, 1, 4, 512, 6, 12]

// array.sort(compNumbersASC)

// function compNumbersASC(num1, num2) {
//     if (num1 > num2)
//         return 1;
//     else if (num1 < num2)
//         return -1
//     else
//         return 0
// }
// console.log(array)




// let array = [5, 2, 3, 1, 4, 512, 6, 12]
// array.sort(compNumbersDESC)

// function compNumbersDESC(num1, num2) {
//     if (num1 < num2)
//         return 1;
//     else if (num1 > num2)
//         return -1
//     else
//         return 0
// }
// console.log(array)




let array = [5, -2, -3, -1, 4, -512, 6, 12]

array.sort(compNumbersASC)

function compNumbersASC(num1, num2) {

    if (num1 < 0) {
        num1 = num1 * -1
    }
    if (num2 < 0) {
        num2 = num2 * -1
    }

    if (num1 < num2)
        return -1;
    else if (num1 > num2)
        return 1
    else
        return 0
}

console.log(array)