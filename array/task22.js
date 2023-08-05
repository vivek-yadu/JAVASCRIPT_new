function removeMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i]
        }
    }
    let index = arr.indexOf(max)
    arr.splice(index, 1)

    console.log(arr)

}

var arr = [112, 1, 2, 3, 12, 1000]
removeMax(arr)