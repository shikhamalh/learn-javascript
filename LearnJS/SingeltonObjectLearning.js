const regularUser = {

    email: "xyz@gmail.com",

    fullName:{

        username:{

            firstname:"xyz",

            lastName:"pqr"

        }

    }

}

// console.log(regularUser);

 

console.log(regularUser.fullName.username.firstname);


//merging 2 objects using spread operator

const obj1 = {1:"a",2:"b"}

const obj2 = {3:"c",4:"d"}

// const obj4 = Object.assign({}, obj1, obj2) // not a correct way

// console.log(obj4);

 

// As learnt from Arrays

 

const obj5 = {...obj1, ...obj2}

console.log(obj5);
console.log(obj5);