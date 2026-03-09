// control flow
let val = true
if(val === true){
   console.log("true")
}
else{
   console.log("false")
}

// truthy and falsy  
 
// falsy
// NaN, undefined, 0 ,-0,Bigint On,"",null, 


// trythy

"0",'false'," ",[],{},function(){}

//Nulllish coalesing operator (??): null : undefined


let val1 ;
val1 = 5??10

console.log(val1)


// ternery op

// condition ? true : false

val1 <= 5 ? console.log("true") :console.log("flase");



 // itrationrs

// for 

for(let i  = 0; i < 20; i++){
   console.log(i);
}
// while
// let i = 0
//    while(i <2){
//       console.log(i)
//    }


// do while

// do{console.log(i)}while(i == 3)



// for of

const Ary = [1,1,2,3,45,6,7,8]

for(const itrator of Ary){
      console.log(itrator)
}

const greetings = "Hello world"

for(const greet of greetings){
   console.log(`char ${greet}`)

}
