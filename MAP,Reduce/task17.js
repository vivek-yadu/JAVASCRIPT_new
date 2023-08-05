let arr = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"]



let concat = arr.reduce((acc, curr) => {
    return acc + "#" + curr
})
console.log(concat)



let countA = arr.reduce((acc, curr) => {
    let count = 0
    for (let i = 0; i < curr.length; i++) {
        if (curr[i] == 'a') {
            count++
        }
    }

    return acc + count;
}, 0)
console.log(countA)


let longestStr = arr.reduce((acc, curr) => {
    if (curr.length < acc.length) {
        return acc;
    } else
        return curr
})
console.log(longestStr)




var data = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

function starting(languages, ch) {
    var count = languages.reduce((acc, curr) => {
        if (curr[0] == ch) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return count;
}
console.log(starting(data, "J"));