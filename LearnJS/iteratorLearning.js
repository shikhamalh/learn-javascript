//for loop same
// do while is same

//========= For of loop ========
// const arr = [1,2,3,4,5]
// for (const n of arr) {
//     console.log("hello",n)
// }

//=============MAP=============
const newMap = new Map()
newMap.set("hello1","hello")
newMap.set("new2","new")
newMap.set("new2","new")
console.log(newMap)

///iterating map
for (const key of newMap) {
    console.log(key)
}

//filter================

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const val1 = mynumbers.filter((item)=>item>4)

console.log("From filter :"+ val1); // filter return array

// Chaining
const myChain = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const chainArray = myChain.map((num)=>num*10)
    .map((num)=>num+1)

console.log("chaining "+chainArray);