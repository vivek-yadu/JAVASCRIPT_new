function rtTriangle(a, b, c) {
    if ((a * a + b * b === c * c) || (b * b + c * c === a * a) || (c * c + a * a === b * b)) {
        return true
    }
    return false
}
console.log(rtTriangle(12, 5, 13))