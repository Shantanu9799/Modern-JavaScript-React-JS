// console.log($);
// console.log(jQuery);



/*
** syntax => $('selector').action()
*/
// code
/*
$('p').click(function() {
    console.log("You clicked on the p tag content");
})
*/



/*
.hide() method
*/
// code
/*
$('p').click(function() {
    $('p').hide();
})
*/
// if more than one paragraph element is present then we've to use this keyword.
/*
$('p').click(function() {
    $(this).hide();
})
*/





/* select by id or class */
// syntax
/*
$('#id').action();
$('.class').action();
*/




/* properly write jQuery like this */
/*
$(document).ready(function() {
    // jQuery Code
    // by this it will ensure that everything will execute after the document is ready
});
*/




/* Selectors */
// syntax
/*
$('p.odd').click(function() {
    console.log("You clicked on a p tag with a class name odd");
});
*/






/* Events */


// double click event
/*
$(document).ready(function() {
    $('p').dblclick(function() {
        console.log("You double clicked on p tag", this);
    });
});
*/



// mouse enter event
/*
$(document).ready(function() {
    $('p').mouseenter(function() {
        console.log("You enter : ", this);
    });
});
*/


// mouse hover event
/*
$(document).ready(function() {
    $('p').hover(function() {
        console.log("You hovered on : ", this);
    });
});
*/

/*
$(document).ready(function() {
    $('p').hover(function() {
        console.log("You hovered on : ", this);
    },
    function() { 
        console.log("Thanks for visiting : ", this);
    });
});
*/





/* ON Method */
// It's mainly used for multiple event handelers
// code 
/*
$('p').on({
    click : function () {
        console.log("you clicked on ", this);
    },
    mouseleave : function () {
        console.log("Mouse Leave");
    }
})
*/



/* Hide ans Show Method */
// code 
/*
$('#lorem').hide();
$('# lorem').show();
*/

/* Hide ans Show take two argument -> time & call back function */
// code 
/*
$('#lorem').hide(1000, function () {
    console.log("Hidden");
    $('#lorem').show(1000, function () {
        console.log("Shown");
    });
});
*/



/* Toggle method */
// if hidden then show and vice versa
//code 
/*
$('button').click(function () {
    $('#lorem').toggle(1000);
});
*/




/* Slide method */
// code
/*
$('#lorem').slideUp(1000, function () { // 1000 is the speed of the slide
    $('#lorem').slideDown(1000);
});
*/

/*
$('button').click(function () {
    $('#lorem').slideToggle(1000);
});
*/



/* Animate method */
// code
/*
$('#lorem').animate({
    opacity: 0.5,
    height: '400px',
    width: '350px',
}, 'slow');
*/














