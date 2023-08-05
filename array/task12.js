let arr = [14, 14, 14, 14, 14];
let allSame = true;
let firstElement = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] != firstElement) {
        allSame = false;
        break;
    }
}

if (allSame) {
    console.log("ALLSAME");
} else {
    console.log("DIFFERENT");
}