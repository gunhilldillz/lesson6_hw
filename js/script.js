
/*Joseph Martin Rivera
Sun Feb 2 2014
Homework Assignment #6
CHEAT SHEET */

// select all of the elements within "body" in html

$("body");
console.log("'body' elements selected");

// select all div elements

$("div");

console.log("'div' elements selected");

// select all head content

$("head");

console.log("'head' elements selected");

// only continue script after document is ready. Produce console message to indicate that the document finished loading.
// anonymous function passed to document.ready -- useful for passing an argumment to another function
// all executed functions go inside this anonymous function to be loaded after the html is loaded

$(document).ready( function(){

	console.log("The document has successfuly loaded and is ready to execute jQuery code!");

// hide and show body at 1000ms interval

	$("body").hide(1000);
	$("body").show(1000);

// fade in and fade out event buttons

	$("#eventboxleft, #eventboxlefta").delay(3000).fadeOut(2000);
	$("#eventboxright, #eventboxrighta").delay(3000).fadeOut(2000);

	$("#eventboxleft, #eventboxlefta").fadeIn(2000);
	$("#eventboxright, #eventboxrighta").fadeIn(2000);	

// slide in and slide out h1 text

	$("h1, h1").delay(7000).slideUp(2000);
	
	$("h1,h1").slideDown(2000);	

// demonstrate animation -- opacity change

	$("body").delay(10000).animate( {
	opacity: 0.2,


	}, 3000);

		$("body").animate( {
	opacity: 100,
	

	}, 3000);

// click events!

	$("#eventboxleft").click(function()

				{

					for ( var i = 0; i < 3000; i++ ) {
   
    					$("#eventboxleft").fadeIn (300);
    					$("#eventboxleft").fadeOut(300);
					}

					
				});

	$("#eventboxlefta").click(function()

				{

					for ( var i = 0; i < 3000; i++ ) {
   
    					$("#eventboxlefta").slideUp (300);
    					$("#eventboxlefta").slideDown(300);
					}

					
				});

	$("#eventboxright").click(function()

				{

					for ( var i = 0; i < 3000; i++ ) {
   
    					$("#eventboxright").hide(300);
    					$("#eventboxright").show(300);
					}

					
				});

	$("#eventboxrighta").click(function()

				{

					for ( var i = 0; i < 3000; i++ ) {
   
    					$("#eventboxrighta").fadeOut(100);
    					$("#eventboxrighta").fadeIn(100);
					}

					
				});

});





