let student1 = {
    name: "Mark",

    Maths: 80,
    English: 75,
    Science: 63

}
let student2 = {
    name: "Bob",
    Maths: 90,
    English: 81,
    Science: 88
}
let student3 = {
    name: "Julia",
    Maths: 88,
    English: 87,
    Science: 89

}
let student4 = {
    name: "Anthony",
    Maths: 60,
    English: 64,
    Science: 61
}

let performance = [student1, student2, student3, student4]


let computerMarks = [
    { name: "Mark", computer: 90 },
    { name: "Bob", computer: 70 },
    { name: "Julia", computer: 88 },
    { name: "Anthony", computer: 81 }
]
for (let i = 0; i < performance.length; i++) {
    if (performance[i].name == computerMarks[i].name) {
        performance[i].computer = computerMarks[i].computer
    }
}


var totalMarks = []

function totalMark(Arr) {
    for (let i = 0; i < Arr.length; i++) {
        let total = Arr[i].computer + Arr[i].English + Arr[i].Maths + Arr[i].Science;
        totalMarks.push(total)
    }
    return totalMarks
}



totalMark(performance)

for (let i = 0; i < performance.length; i++) {
    performance[i].totalMarks = totalMarks[i]
}



let maxMarks = []
for (let i = 0; i < performance.length; i++) {
    let marks = [];
    marks.push(performance[i].Maths, performance[i].English, performance[i].Science, performance[i].computer)
    let max = 0;
    for (let i = 0; i < marks.length; i++) {

        if (marks[i] >= max) {
            max = marks[i];
        }
    }

    let avgMark = (performance[i].totalMarks) / 4;
    maxMarks.push({ "name": performance[i].name, "avgMarks": avgMark, "maxMarks": max })

}

console.log(maxMarks)

// let newJSON

// for (let i = 0; i < performance.length; i++) {
//     let avgMark = (performance[i].totalMarks) / 4;
//     let maxMark = (performance[i].totalMarks)
//     newJSON.push({ "name": performance[i].name, "avgMarks": avgMark, "MaxMarks": maxMark })
// }