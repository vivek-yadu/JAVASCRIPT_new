// //task 1-a-1 
// const numbers = [6, 3, 3, 41, 5, 5, 3]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         sum = sum + numbers[i]
//     }
// }
// console.log(sum)

//task 1-a-2
// const arr = [5, 4, 1, 223, 20, 10, 2, 1]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum)
//task 1-a-3
// const str = ["hii", 'i', 'am', 'vivek']
// for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].toUpperCase()
// }
// console.log(str)

// //task 1-a-4
// function hasPrime(numbers) {
//     let len = numbers.length
//     for (let i = 0; i < len; i++) {
//         let check = isPrime(numbers[i])
//         if (check) {
//             return true;
//         }
//         return false
//     }
// }

// function isPrime(num) {

//     for (let i = 2; i <= num - 1; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const arr = [21, 12, 32]
// console.log(hasPrime(arr))


// //task 1-a-5

// function hasB(str) {
//     let lenstr = str.length;
//     for (let i = 0; i < lenstr; i++) {
//         if (str[i] == 'b' || str[i] == 'B') {
//             return true;
//         }
//     }
//     return false
// }

// const str = ['Hi', 'Ball', 'call', 'Bye', 'bood']
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (hasB(str[i])) {
//         count++;
//     }
// }
// console.log("number of strings with b or B is " + count)

// //task 1-a-6
// const arr = []
// let n = 10
// for (let i = 1; i <= n; i++) {
//     arr.push(i)
// }
// console.log(arr)



// const array = [2, 3, 4, 6, 8, 9, 12, 1, 2]
// let newArr = []

// for (let i = 1; i < array.length; i++) {
//     if (array[i] % 3 != 0) {
//         newArr.push(array[i])
//     }
// }
// console.log(newArr)



// const arr = ['Hii', 'Hello', 'x', 'y']
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'Hello') {
//         arr.splice(i, 1)
//         break;
//     }
// }

// console.log(arr)

//task 1-a-9

const techs = ["c++", "python", "javaScript"]

for (let i = 0; i < techs.length; i++) {
    if (techs[i] == 'javaScript') {
        techs.splice(i + 1, 0, 'Angular', 'React', 'Node')
    }
}

console.log(techs)