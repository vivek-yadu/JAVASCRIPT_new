let jsonArray = [
    { "name": "Mary", "marks": [72, 65, 55, 71] },
    { "name": "Anita", "marks": [66, 70, 75, 53] },
    { "name": "Edward", "marks": [44, 54, 64, 58] },
    { "name": "Thomas", "marks": [62, 55, 65, 81] },
    { "name": "Robin", "marks": [41, 44, 47, 49] },
    { "name": "Sophia", "marks": [71, 73, 67, 77] },
    { "name": "Bruce", "marks": [52, 57, 61, 64] }
];

8.1
let filterTotalMarkLessThan250 = jsonArray.filter((a) => {
    let totalMark = 0;
    for (let i = 0; i < a.marks.length; i++) {
        totalMark += a.marks[i];
    }

    return totalMark < 250
})

console.log(filterTotalMarkLessThan250)

//8.2

let filterOneMoreThan70 = jsonArray.filter((a) => {
    for (let i = 0; i < a.marks.length; i++) {
        if (a.marks[i] > 70)
            return true
    }
    return false
})
console.log(filterOneMoreThan70)


let filterTwoMoreThan70 = jsonArray.filter((a) => {
    let count = 0;
    for (let i = 0; i < a.marks.length; i++) {
        if (a.marks[i] > 70)
            count++
    }

    if (count >= 2) {
        return 1
    } else {
        return 0
    }

})
console.log(filterTwoMoreThan70)


//8.3 
function avgNumber(avgnum) {
    let filterAvgNum = jsonArray.filter((a) => {
        let totalMarks = 0
        for (let i = 0; i < a.marks.length; i++) {
            totalMarks += a.marks[i]
        }
        let average = totalMarks / (a.marks.length);
        if (average > avgnum)
            return 1
        else
            return 0
    })
    return filterAvgNum
}

console.log(avgNumber(60))