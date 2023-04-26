/* This is a JavaScript function that performs the following steps:

It retrieves the HTML content of an element with the ID "text" using 
the document.getElementById() method and the innerHTML property. 
This content is then logged to the console using console.log().

It then sets the HTML content of the same element with the ID "text" 
to the string "JavaScript is easy and fun!" using the innerHTML property.

Finally, it logs the new HTML content of the element with the ID "text" to the console using console.log().

This function essentially retrieves the original text of an HTML element, 
changes it to a new string, and then logs both the original and new strings to the console. 
It also updates the HTML content of the element with the new string.*/

function func() {
    console.log(document.getElementById("text").innerHTML);

    document.getElementById("text").innerHTML = "JavaScript is easy and fun!"

    console.log(document.getElementById("text").innerHTML);
}