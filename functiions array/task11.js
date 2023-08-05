function seprator(arr, sep) {
    let joins = arr.join(sep)
    return joins;
}

let array = ["Hi", "Hello", "Bye"]
let sep = "**"

console.log(seprator(array, sep))