/*
// normal function with single parameter
function greetings(message) {
    alert(message);
};
//invoking the function
greetings("Hello EveryOne");

//arrow function with single parameter
let greetings = message => alert(message);
//invoking the arrow function
greetings("Hello EveryOne");


// normal function with multiple parameter
function greetings(user, message) {
    alert(`${user}, ${message}`);
};
//invoking the function
greetings('Shantanu', 'Good Morning');

//arrow function with multiple parameter
let greetings = (user, message) => alert(`${user}, ${message}`);
//invoking the arrow function
greetings('Shantanu', 'Good Morning');


// Arrow Function - if there is a single statement no need of return keyword

// normal function with single parameter
function greetings(message) {
    return alert(message);
};
//invoking the function
greetings("Hello EveryOne");

//arrow function with single parameter
let greetings = message => alert(message);
//invoking the arrow function
greetings("Hello EveryOne");


// arrow function with multiple statement
let blog = (title, description) => {
    if(!title) {
        throw new Error("Title is needy");
    }
    if(!description) {
        throw new Error("Body is needy");
    }
    return alert(`${title}, ${description}`);
};
// invoking the function
blog();
blog("Hello", "EveryOne");
*/

// this keyword refers to the enclosing context

// problem with normal function and solution by the arrow function
// creating a object
const nepal = {
    mountains : ["Everest", "Fish Tail", "Annapurna"],
    printWithDash : function() {
        setTimeout(function() {
            console.log(this.mountains.join(" - "))
        }, 3000)
    }
};
nepal.printWithDash();

// using arrow function we can solve the above problem.
const nepal = {
    mountains : ["Everest", "Fish Tail", "Annapurna"],
    printWithDash : function() {
        setTimeout(() => {
            console.log(this.mountains.join(" - "))
        }, 3000)
    }
};
nepal.printWithDash();