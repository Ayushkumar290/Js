// This and Arrow function



const users= {
   username:"Rust COHLE",
   price: 999,
   welcomeUser :function(){
         console.log(`${this.username},wlcome to here`);

   }

}
users.welcomeUser()


console.log(this)  // in browser it willgive window but in node env it is providing empty object




function remdonfunc(){
   let username  =" rust"
   console.log(this.usename) // undefind

}
remdonfunc()

const funcarrow = ()=>{
   let username  =" rust"
   console.log(this.usename)  
}





// Arrow func


   const addonetwo  = (num1,num2)=> {

      return num1+num2 /// if u not use {} than no need to use return     // explicit return  
   } 

   console.log(addonetwo(4,56));   


