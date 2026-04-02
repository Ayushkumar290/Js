


const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(piDescriptor);

console.log(Math.PI);

const ABC  = {
    name: "abc",
    isAvailaible: true,
    salary: 1000
} 


console.log(Object.getOwnPropertyDescriptor(ABC, "name"));


Object.defineProperty(ABC, "name",{writable: false,enumerable: false})

console.log(Object.getOwnPropertyDescriptor(ABC, "name"));



for( const[key, value] of Object.entries(ABC)){
    console.log(key, value);
}