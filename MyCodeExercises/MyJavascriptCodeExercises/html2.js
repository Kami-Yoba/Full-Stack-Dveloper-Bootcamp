/* This is a JavaScript function named calcSquare(). It retrieves an HTML element with the ID "number" 
using the document.getElementById() method, and assigns the numeric value of the element's content to 
the inputValue variable using the Number() method.

The function then calculates the square of the inputValue using the exponentiation operator (**) and 
assigns the result to the squareValue variable.

Finally, the function logs a message to the console using string interpolation to display the original 
inputValue and the calculated squareValue.

Note that this function assumes that the HTML element with the ID "number" contains a valid number. 
If the element's content is not a valid number, the function will return NaN (Not a Number) for inputValue 
and the calculation will fail.*/

function calcSquare() {
	var inputElement = document.getElementById("number");
	var inputValue = Number(inputElement.innerHTML);

    var squareValue = inputValue ** 2;
    console.log(`The square of ${inputValue} is ${squareValue}`);
	
}