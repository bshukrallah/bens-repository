// var students = [{
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 26
// }, {
//     firstName: "Mary-Jane",
//     lastName: "Watson",
//     age: 25
// }];

// console.log (students[0].firstName + " " + students[0].lastName);

var students = [];

function student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I am " + this.age + " years old!";
    };
}

var s1 = new student("Jenny", "Laga", 15);
console.log(s1.greeting());

students.push(s1);
console.log(students);
students.push(new student("George", "Lopez", 19));
students.push(new student("Reishi", "Ray", 7));
students.push(new student("Angie", "Ivey", 31));

console.log(students[0].greeting());
console.log(students);

for (var index = 0; index < students.length; index = index + 1 ) {
    console.log(students[index].firstName + " " + students[index].lastName);
};
