// file: fizzbuzz.js

// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

module.exports = fizzBuzz;