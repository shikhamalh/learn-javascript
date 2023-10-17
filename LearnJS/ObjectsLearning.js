const user = {
name : "shikha",
dept : "QA",
location : "Pune",
email : "shikha@xyz.com"

}
 console.log(user)

 user.email= "shikhaM@abc.com"
 console.log ("=====BEFORE FREEZE====")
console.log(user)

Object.freeze(user)

console.log ("=====AFTER FREEZE====")
user.email= "shikhaM@pqr.com"

console.log(user)




