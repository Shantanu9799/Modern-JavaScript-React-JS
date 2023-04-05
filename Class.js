// Class 

// old version
function Holiday(destination, days) {
    this.destination = destination;
    this.days = days;
}
Holiday.prototype.info = function() {
    console.log(this.destination + " will take " + this.days + " days to reach out.");
}
// creation of object
let banglore = new Holiday('Banglore', 2);
banglore.info();

// new version - ES6
class Holiday {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info() {
        console.log(`${this.destination} will take ${this.days} days to reach out.`);
    }
}
// object creation
let banglore = new Holiday("Banglore", 2);
banglore.info();


// inheritance
// sub class
class saman extends Holiday {
    constructor(destination, days, reason) {
        super(destination, days);
        this.reason = reason;
    }
    info() {
        super.info();
        console.log(`The reason is, ${this.reason}`);
    };
}
let bangloreR = new saman("Banglore", 2, "i got a job in google");
bangloreR.info();