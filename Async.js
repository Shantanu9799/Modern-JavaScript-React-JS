// Promise

/*
var ans = new Promise((resolve, reject) => {
    if(false) {
        return resolve();
    } else {
        return reject();
    }
});

ans
.then(function() {
    console.log("Resolved successfully");
})
.catch(function() {
    console.log("Rejected successfully");
})
*/


/*
var isGreater = new Promise((resolve, reject) => {
    var number = Math.floor(Math.random() * 10);
    if(number < 5) {
        return resolve();
    } else {
        return reject();
    }
});

isGreater
.then(function() {
    console.log("Number is lesser than 5");
})
.catch(function() {
    console.log("Number is greater then 5");
});
*/




// problem with promises

/*
function fetchData() {
    fetch(`https://randomuser.me/api/`)
    .then(function(rawData) {
        return rawData.json();
    })
    .then(function(data){
        console.log(data);
    })
}

fetchData();
*/


// Solution

/*
async function fetchData() {
    let rawData = await fetch(`https://randomuser.me/api/`)
    let data = await rawData.json();
    console.log(data);
}

fetchData();
*/

