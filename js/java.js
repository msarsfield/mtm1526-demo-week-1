// Javascript single line comment
/*
Javascript multin-line comments

// JavaScript Document
*/

alert('This is an alert.');

// prompt() is for user input, has a text field for the user to enter some text

var name;

while (!name){
	name = prompt('What is your name?'); // if you want to collect the name, you have to create a variable as we do in action script
}
// in javascipt, a trqce is called console.log.  It writes out the content of a variable for debugging

console.log(name); //to see the trace you have to go to firebug

//document where all the html is located

document.write('Hello, '+ name);

// window which allows you to get at the URL bar the backbutton.  The +  operator is for combining sctrings and together

for (var i = 1; i < 5; i++) {
	document.write ('<br>' + i)
	document.write('<h1>' + i + '</h1>');
	
}

//creaing a funtion in js.  funciton declaration and some other name (maybe funciton assignment - this is a more versatile way by including it in a new variable)

function isNameCool(){
	var name = prompt('What is your name?');
	
	if (name =='Thomas') {
			document.write ('That is an awesome name!');
	} else {
			document.write("I don't like your name.");	
	}
}
isNameCool();

var writeNameMultipleTimes = function (){
	for (var i = 1; i <11; i++)
	document.write('<strong>Thomas</strong><br>');
	
};// you should always put a colon after the left curley brace when creating a variable via function assighment

//validator is jshint.com

