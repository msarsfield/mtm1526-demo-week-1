//Mary Sarsfield - January 13, 2012
//MTM1526-Homework-1 - Letter Looper
//Javascript - Creating user input field + loops + change action after a "while" 


var result;

while (!result){
	result = prompt('Please enter the first letter of you last name.'); 
}//Hi Thomas.  What code would I use at this point to enable the "cancel" button on the prompt (var x page if the user does not wish to enter the info?

for (var a = 1; a <11; a++) {
	
	var z = 0; 
	
while (z != a){
	document.write (result);
	z = z+1;
}
	document.write(result,'<br>');
}

//{
////	document.write ('Holly Cow Thomas... That only took me 2 1/2 hours!'); I had initially put my comments on the Javascript page, and then tested simply adding it to the index page.  I was able to add line breaks by using the index page whereas I was having trouble doing it in the as file.
//}

