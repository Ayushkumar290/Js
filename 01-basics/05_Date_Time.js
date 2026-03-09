// date and time

const time = new  Date()
console.log(time.toString())
console.log(time.toDateString())
console.log(time.toLocaleString())

console.log(typeof(time))


let myDate =new  Date()
console.log(myDate.getMonth())  

 let newDate = new Date();

// string inteerpolation 
 newDate.toLocaleString('default', {
    weekday:"narrow"
 })

console.log(newDate)  
