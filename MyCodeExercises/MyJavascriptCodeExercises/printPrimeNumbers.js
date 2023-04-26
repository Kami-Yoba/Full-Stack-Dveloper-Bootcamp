/*This is a JavaScript function that prints out all prime numbers between 2 
and a specified number (in this case, 60), and also returns the total number 
of prime numbers found. Here's a step-by-step breakdown of how it works:

The function is declared with the name "prime". The variable "number" is initialized with the value 60. This is the upper 
limit of the range of numbers we want to check for primes. The variable "isPrime" is declared but not initialized. 
This variable will be used to keep track of whether a given number is prime or not.
The variable "t" is initialized with the value 0. This variable will be used to keep track of the total number of primes found.
A "for" loop is used to iterate over all numbers from 2 up to "number".
Inside the loop, "isPrime" is set to 1 (true) to assume the current number is prime unless proven otherwise.
Another "for" loop is used to check if the current number is divisible by any numbers other than 1 and itself 
(i.e., if it has any factors other than 1 and itself). This loop iterates over all numbers from 2 up to the current number.
If the current number is divisible by any of the numbers in the inner loop, "isPrime" is set to 0 (false) and 
the inner loop is broken out of using the "break" keyword. If "isPrime" is still 1 after the inner loop has 
finished, then the current number is prime and it is printed to the console using "console.log(i)", and the 
value of "t" is incremented by 1. After the outer loop has finished, the total number of primes found is 
printed to the console using "console.log("Total of prime numbers found: "+t)". So, when you call 
the "prime" function, it will print out all prime numbers between 2 and 60 and tell you how many prime numbers were found*/

function prime() {
    var number = 60;
    var isPrime;
    t = 0;
    for (let i = 2; i<=number; i++) {
        isPrime = 1;
        
        for (let j = 2; j<i; j++) {
            if (i % j === 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime === 1) {
            console.log(i);
            t++;
        }
    }
    console.log("Total of prime numbers found: "+t);
    
}
prime();