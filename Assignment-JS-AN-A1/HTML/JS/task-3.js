let str1 = '99988877766655500'
let str2 = '99988877766655510'
let len1 = str1.length
let len2 = str2.length

if (len1 < len2) {
    console.log(str2)
} else if (len2 < len1) {
    console.log(str1)
} else {
    for (let i = 0; i < len1; i++) {
        if (str1[i] > str2[i]) {
            console.log(str1)
            break
        } else if (str1[i] < str2[i]) {
            console.log(str2)
            break
        } else if (str1[i] == str2[i]) {
            console.log("Equal")
            break
        }
    }

}