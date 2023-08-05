var str = "DADA"
let mid = str.length / 2;
let firstHalf = str.substring(0, mid);
let secondHalf = str.substring(mid);
if (firstHalf == secondHalf) {
    console.log("yes")
} else {
    console.log("no")
}