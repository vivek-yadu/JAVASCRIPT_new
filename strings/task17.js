var str = "JAVA"
let len = str.length
let mid = str.length / 2

if (len % 2 == 0) {
    let firstHalf = str.substring(0, mid);
    let secondHalf = str.substring(mid);
    console.log(secondHalf + firstHalf)
} else {
    let a = mid * 10;
    let remain = a % 10;
    mid = (a - remain) / 10;
    let firstHalf = str.substring(0, mid);
    let secondHalf = str.substring(mid + 1);
    console.log(secondHalf + str[mid] + firstHalf)
}