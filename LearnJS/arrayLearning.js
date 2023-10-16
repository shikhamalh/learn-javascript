const myArraySh = [0,1,2,3,"shikha","2233hhhxx",true]

myArraySh.push(6) //add to end
console.log(myArraySh)

myArraySh.pop()//remove from end
console.log(myArraySh)

myArraySh.unshift(9)
console.log(myArraySh) // add to start

myArraySh.shift()
console.log(myArraySh) //remove from start

console.log(myArraySh.slice(0,2))
console.log("===========")
console.log(myArraySh.splice(0,5))

console.log("===========")
console.log("Combining 2 arrays in 1")

let a1 = ['a','b','c']
let a2 = ['j','k','l']
//a1.push(a2) //not a correct practice to combine arrays
console.log("=====By using concat func======")
let a3 = a1.concat(a2) //firs way
console.log(a3)

yourArray=['a', 'b', 'c']
yourArray2=['j','k','l']
console.log("=====By using spread operator======")
const spreadOutArray = [...yourArray, ...yourArray2] //second way
console.log(spreadOutArray);