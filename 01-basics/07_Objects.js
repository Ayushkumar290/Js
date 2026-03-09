// objects 

// {} anyting inside the perentisies is  an object 

// singleton  -> if objet is created my cunstructor than it  is singleton
// Object.create

const sym = Symbol("key1");
const user = {
   name : "jsuser",   // key value pair 
   age: 15,
   place: "Rajgir",
   gmail: "right@gmail.com",
   isLoggedIn: false,
   lastLoginDays: ["Mongday","Tusday"],
   [sym]: "tirger"

}
console.log(typeof(user.age)) // galat tarika
console.log(typeof(user["age"])) // sahi tarika 
console.log(typeof(user[sym]))

user.gmail = 25;
// Object.freeze(user)


user.greeting = function(){
   console.log(`hello ,${this.name}`)
}

console.log(user.greeting())



// objects part 2

const tinder  = new Object()  // singlton becuaase use constructor to create

const ewTin = {} // not singleton

tinder.id = "1234"

tinder.name = "Big Show"

console.log(tinder)


const regulerUser = {
   email: "reguler@gmail.com",
   nam:{
      fullname:{
      username: "Rja",
      middle: "kumr",
      last : "Rbmaef"
   }
   }

}

console.log(regulerUser.nam.fullname.last)

const aaa= {n: "!"}
const baa = {m: "23"}

console.log(Object.assign({}, aaa,baa))

const a3  = {...aaa,...baa}
console.log(a3)

console.log(tinder.hasOwnProperty('name'))
