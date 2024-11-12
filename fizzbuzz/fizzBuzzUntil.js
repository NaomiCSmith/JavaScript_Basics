// This challenge builds on the previous one, where you defined a fizzBuzz function.

// Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop through all numbers
// from 1 to the given one, call the fizzBuzz function for the current number and print the result.

const fizzBuzzUntil = (num) => {
    for (let number = 1; number <= num; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('FizzBuzz');
        } else if (number % 3 === 0) {
            console.log('Fizz');
        } else if (number % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(number);
        }
    }
}

module.exports = fizzBuzzUntil;