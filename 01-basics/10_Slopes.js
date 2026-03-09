// scopes 


// var a= 20 // is a global scope it only respect function not block ;

// let and  const are blocked scope mean only used inside a block;


var bae = 300;
if(true){
   var bae  = 303; // it cretes a problem we can reassign  var 

}
console.log(bae)


// nested sclope


function one(){
   const username = "JIRO"
   function two(){
      const website = "youttube"
      console.log(username);
   }
   // console.log(website);

   two()
}

one();


// =================== Intruting+++++++++++++++++++++++++++++++++
console.log(addOne(5))
function addOne(num){  // function
   return num+1;

}



// addTwo(5)  //  Cannot access 'addTwo' before initialization
const addTwo =function(num){
   return num+2
}
