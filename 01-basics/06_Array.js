
// Arrays


const arrr = [0,1,2,3,4,5]

const ar1 = ["raj", "hitesh"]

const arr2 = new Array(1,2,3,4,5,6);



console.log(arrr)

arrr.pop()
arrr.push(7)
console.log(arrr)

arrr.shift()
arrr.unshift(10)
console.log(arrr)
console.log(arrr.includes(8))
console.log(arrr.indexOf(7))


const newArr = arrr.join()    
console.log(arrr)
console.log(newArr)

// slice and splice


console.log("A",arrr)

const myn1 = arrr.slice(2,4)

console.log(myn1);

console.log( "B",arrr)

const myn2 = arrr.splice(2,4)

console.log( myn2)
console.log( "C",arrr)

/// Part 2: Array



const marval = ["superman","ironman","moon Knight"]
const dc = ["Batman","peacmaker","Joker"]

// marval.push(dc)

console.log(marval);


const hero = marval.concat(dc)
console.log(hero)

const newHeo = [...marval,...dc]

console.log(newHeo)

const r1  = [1,[2,3,4,5,],4,6,4,[34,56,[123,5,67,3,5,]]]

const newr1 = r1.flat(Infinity)
console.log(newr1)

console.log(Array.isArray("rakesh"))
console.log(Array.from("rakesh"))

console.log(Array.from({name: "raj",id:"123"})) // intresting

let sc = 12
let sc2= 12

let sc3 = 14

console.log(Array.of(sc,sc2,sc3))


