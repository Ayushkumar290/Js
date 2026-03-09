// Maps

const newMap = new Map()

newMap.set('Ind',"India")
newMap.set('Us',"United States of America")
newMap.set('Prc',"China")
newMap.set('JP',"Japan")

// console.log(newMap)


// for(const it  of newMap){
//    consol.log(it);
// }
// for(const [it,val]  of newMap){
//    console.log( `${it} :=> ${val}`);
// }


const obj = {
   js: "Javascript",
   cpp:"C++",
   J: "Java",
   g:"Go"
}

for(const elem in obj){  // use in keyword for object
   console.log(`${elem} : ${obj[elem]}`)
}

const arry = ["js","cpp","rust","go"]
for(const ele in arry){
   console.log(arry[ele])
}



// cannot use for in on map



const coding = ["js","cpp","rust","go","java","clos"]



