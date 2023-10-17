const user = {
    userName : "shikha",
    dept : "qa",
    welmsg: function(){
        console.log(`${this.userName}, welcome to website`)
    }

    
}
//user.welmsg()
//console.log(this.welmsg);

const arr = function(){
    console.log("hello");
}
arr()

const arr2= ()=>{
    console.log("hello2");
}
arr2()


//=============================
const arr3= ()=>console.log("hello3");
arr3()


const add = (num1,num2) => (num1+num2)
console.log(add(10,22))

//IIFE concept
const leatnIIFE =() => (console.log("learn iife"))
leatnIIFE();
//iife method
(()=>{console.log("learn iffe2")})();

(()=> { console.log("learn iifeeeeeee")})();