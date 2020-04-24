var dog = "reishi"
console.log(dog);

const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcom", age: 15 },
];

// console.log(moviePatrons)

moviePatrons.forEach(patron => console.log(patron.name, patron.age));
const age = moviePatrons.filter(patron => console.log(patron.age[3]));
const canWatchRatedR = moviePatrons.filter(patron => patron.age > 17);
console.log (canWatchRatedR);

moviePatronNames = moviePatrons.map(patron => patron.name);
console.log(moviePatronNames)
console.log(age)