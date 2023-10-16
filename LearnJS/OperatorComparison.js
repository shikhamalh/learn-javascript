// console.log(2===2)

// console.log (2>2)

// console.log("================")

// console.log ("2"==2) //some interesting (try to convert tosme dataatype and then check)
// console.log ("2"===2) //(checks value, datatypes)

console.log (null==0)
console.log (undefined==0)

//PRimitive and Non Primitve Data types

var num1=2
var num2=3

console.log (num1+num2)
var ans = num1 > num2
console.log (ans)

// More calculations

var sellingprice = 199;
var listingprice = 799;

var discountprice =  ((listingprice - sellingprice)/ listingprice) * 100;

console.log("Discount Price : "+discountprice)

// Rounding up using a given function Math

console.log("Displaying the rounded up value: "+ Math.round(discountprice));

// Stop using var due to issues of scoping

//Primitve : String, null, number, Boolean, undefined, Symbol, BigInt
//Non Primitve : Array, Object, Functions