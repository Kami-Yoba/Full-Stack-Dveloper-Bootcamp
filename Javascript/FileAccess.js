//const fs = require('node:fs');

//const fileData = fs.readFileSync("Hello.txt", "utf8");
//console.log(fileData);

var sentence = "5om3 wr173 word5 u51n9 numb3r5.";

function printDigits() {
    var digits = sentence.match(/\d+/g);
    if (digits === null) {
        console.log("No digits!");
    } else {
        console.log(digits);
    }

}
