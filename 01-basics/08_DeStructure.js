const cource = {
   name: "JS",
   instructor: "Hitesh",
   Price: 999,
}

//de-structureing 

cource.instructor;
const {instructor: it} = cource;

console.log(it)
