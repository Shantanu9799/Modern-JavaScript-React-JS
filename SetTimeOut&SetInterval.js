// setTimeout(function(){
//     console.log("Hello World");
// }, 5000);


// setInterval(function(){
//     console.log("Hello World");
// },5000);

var stop = setInterval(function(){
    console.log("Hello World");
},500);

setTimeout(function(){
    clearInterval(stop);
}, 3000);