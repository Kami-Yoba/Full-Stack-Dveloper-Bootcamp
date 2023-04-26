/* This is a JavaScript function called checkAge() which accepts no arguments, 
but gets the value of an element with the id of "age" from the HTML document. 
The function then logs the input age to the console.

If the input age is greater than or equal to 18, the function logs "The user is an adult." 
to the console. If the input age is greater than 0 but less than 18, the function logs 
"The user is not yet an adult." to the console. If the input age is not a number or 
less than or equal to 0, the function logs "Invalid input!" to the console.*/


function checkAge() {
    var age = document.getElementById("age").value;

    console.log("Input age: "+age);
	
	if (age>=18) {
		console.log("The user is an adult.");
	}
	else if (age>0 && age<18) {
		console.log("The user is not yet an adult.")
	}
		
	else {
		console.log("Invalid input!");
	}
}
