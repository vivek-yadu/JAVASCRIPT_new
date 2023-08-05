let array = [1, 2, 3, 4, 5, 6, 7, 8];
let isSequence = true;

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 != array[i + 1]) {
        isSequence = false;
        break;
    }
}

if (isSequence) {
    console.log("SEQUENCE");
} else {
    console.log("NO");
}