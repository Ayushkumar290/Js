function greet(){
   console.log("Holla Amigo")
}
greet()

let num1 = "23"
let num2  ="34"

function sum(number1,number2){
   console.log(`Sum : ${number1+number2}` )

}
function sum1(number1,number2){
   return number1+number2

}

const sum2= sum1(num1,num2)
console.log(sum2)