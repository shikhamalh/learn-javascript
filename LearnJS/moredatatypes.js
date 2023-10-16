// const stringVal= "Piyush"

// const nullValue = null;

// let notDefined;

// console.log (stringVal)
// console.log (nullValue)
// console.log (notDefined)

// let fSymbol = Symbol("123")
// let SSymbol = Symbol("123")
// console.log (fSymbol==SSymbol)
// console.log (fSymbol===SSymbol)

// const actor = ["Akshay","Srk", "Ranbir"]

let user1 = {
    email : "abc@x.com",
    phone: "1234567890"
}
let user2 = user1 // not only values but address is also copied
user2.email = "sam@x.com"
console.log(user1.email)
console.log(user2.email)


//===============================
let user3 = {
    email : "abc@x.com",
    phone: "1234567890"
}
let user4 = user3

console.log(user3.email)
console.log(user4.email)