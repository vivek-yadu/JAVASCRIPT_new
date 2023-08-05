// const strings = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript']

// console.log(strings)

// function task5(ch) {
//     let endWithT = strings.find((name) => {
//         let len = name.length
//         return name[len - 1] == ch
//     })

//     let indexEndOfEndsWithT = strings.findIndex((name) => {
//         let len = name.length
//         return name[len - 1] == ch
//     })
//     let arrayEndWithTfilter = strings.filter((name) => {
//         let len = name.length
//         return name[len - 1] == ch
//     })
//     console.log(endWithT)
//     console.log(indexEndOfEndsWithT)
//     console.log(arrayEndWithTfilter)
// }

// task5('t')




const strings = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript']

console.log(strings)

function task5(ch) {
    let endWithT = strings.find((name) => {
        for (let i = 0; i < name.length; i++) {
            if (name[i] == ch) {
                return name
            }
        }
    })

    let indexEndOfEndsWithT = strings.findIndex((name) => {
        for (let i = 0; i < name.length; i++) {
            if (name[i] == ch) {
                return name
            }
        }
    })
    let arrayEndWithTfilter = strings.filter((name) => {
        for (let i = 0; i < name.length; i++) {
            if (name[i] == ch) {
                return name
            }
        }
    })
    console.log(endWithT)
    console.log(indexEndOfEndsWithT)
    console.log(arrayEndWithTfilter)
}

task5('a')