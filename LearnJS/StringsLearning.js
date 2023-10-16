
const name = "Shikha"

const dept = "QA"

console.log(`Hello my name is ${name} and I work as ${dept}`)

const newName = new String("Shikha")

console.log(typeof(name))
console.log(typeof(newName))

console.log("================")

console.log(newName[0])
console.log(newName._proto_)
console.log(newName.length);
console.log(newName.toUpperCase());
console.log("================")
//Substring
const newString = newName.substring(0,4)

console.log(newString);
console.log("================")
//Slice
const learnSlice = newName.slice(0,4)
console.log(learnSlice);
console.log("================")
//Split
const splitString = "Shikha-M-Gupta"
console.log(splitString.split('-'))