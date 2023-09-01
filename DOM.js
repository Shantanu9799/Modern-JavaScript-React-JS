
// -------- 4 Pillars --------


// selection of HTML Element
/*
var element = document.querySelector("h1");
console.log(element);
*/


/*
// Changing HTML element
var element = document.querySelector("h1");
element.innerHTML = "Hello India";
console.log(element);
*/


// changing CSS
/*
var element = document.querySelector("h1");
element.style.backgroundColor = "#000";
element.style.color = "aqua";
*/


// Event Listeners
/*
var element = document.querySelector("h1");
element.addEventListener("click", function() {
    element.innerHTML = "JavaScript OP"
    element.style.backgroundColor = "#000";
    element.style.color = "aqua";
});
*/



/* Bulb */
/*
var bulb = document.querySelector("#circle");
var btn = document.querySelector("button");

var flag = true;

btn.addEventListener("click", function(){
    if(flag){
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
    } else {
        bulb.style.backgroundColor = "white";
        btn.innerHTML = "ON";
    }
    flag = !flag;
});
*/



// selecting multiple element at a time
/*
var elements = document.querySelectorAll("h1");
elements.forEach(function(elem) {
    console.log(elem);
});
*/


// difference between innerHTML and textContent
/*
var element = document.querySelector("#box");
element.innerHTML = "<h1>Hello</h1>"
element.textContent = "<h1>Hello World</h1>"
*/