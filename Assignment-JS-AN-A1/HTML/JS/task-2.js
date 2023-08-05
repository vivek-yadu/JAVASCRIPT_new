function performance(a, b, c, d) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }

    console.log("Maths " + a + " : " + findGrade(a))
    console.log("English " + b + " : " + findGrade(b))
    console.log("Computer " + c + " : " + findGrade(c))
    console.log("Science " + d + " : " + findGrade(d))
    console.log("Highest marks" + ":" + max)
}

function findGrade(num) {
    if (num >= 80) {
        grades = 'A'
    } else if (num >= 60 && num < 80) {
        grades = 'B'
    } else if (num >= 40 && num < 60) {
        grades = 'C'
    } else {
        grades = 'D'
    }
    return grades
}


console.log("\n test case 2 \n")
performance(55, 58, 71, 62)
console.log("\n test case 3 \n")
performance(37, 33, 32, 36)
console.log("\n test case 4 \n")
performance(71, 85, 53, 39)
console.log("\n test case 5 \n")
performance(80, 60, 40, 50)