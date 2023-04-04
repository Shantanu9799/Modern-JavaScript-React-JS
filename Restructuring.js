// Restucting variables in an object
var name = "Shantanu";
var age = 21;
function func() {
    console.log(`Mr. ${this.name}'s age is ${this.age}`);
};
let obj = {name, age, func};
console.log(obj.func());

// another best format
let obj1 = {
    name : "Shantanu",
    age : 21,
    func() {
    console.log(`Mr. ${this.name}'s age is ${this.age}`);
    }
};
console.log(obj1.func());