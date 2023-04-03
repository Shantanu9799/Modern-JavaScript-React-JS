// old version 
let fname = 'Shantanu'
let lname = 'Chatterjee'
let age = prompt('Enter my age : ')
alert(fname + ' ' + lname + ' '+ 'is ' + age + ' years old');
// console.log(fname + ' ' + lname + ' '+ 'is ' + age + ' years old');

// new version
alert(`${fname} ${lname} is ${age} years old.`);

// while using ES6 to concate string we can use the ``. for accessing variables use the ${Variable}