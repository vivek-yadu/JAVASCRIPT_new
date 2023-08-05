var str = "q#w2@B**5g"
let specialChar = ''
for (let i = 0; i < str.length; i++) {
    if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9'))) {
        specialChar += str[i];
    }
}
console.log(specialChar)