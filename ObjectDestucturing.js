// normal objcet
let day = {
    morning : "Yoga",
    afternoon : "cricket",
    evening : "Workout",
    night : ["sleep", "dream"]
};

// destructuring the object
// anonymus obj for creating the properties to a variable
let {afternoon, night} = day;
console.log(`${afternoon} - ${night}`);

// also we change the value 
afternoon = "Video  games";
console.log(`${afternoon} - ${night}`);


// object destructuring in a function
let func = student => {
    console.log(`${student.name} from ${student.university}`);
}
func({
    name : "Shantanu Chatterjee",
    university : "SKFGI"
})
// with object destructuring inside the func
let func = student => {
    let {name, university} = student;
    console.log(`${name} from ${university}`);
}
func({
    name : "Shantanu Chatterjee",
    university : "SKFGI"
})

// with object destructuring inside the func parameter
let func = ({name, university}) => {
    console.log(`${name} from ${university}`);
}
func({
    name : "Shantanu Chatterjee",
    university : "SKFGI"
})