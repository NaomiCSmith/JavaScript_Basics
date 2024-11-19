// file: fizzbuzz.test.js

// > fizzBuzz(3); 
// 'Fizz'

// > fizzBuzz(5);
// 'Buzz'

// > fizzBuzz(8);
// 8

// > fizzBuzz(15);
// 'FizzBuzz'

// > fizzBuzz(18);
// 'Fizz'

// > fizzBuzz(20);
// 'Buzz'


// Initialise a new project directory and install Jest.
// In a file fizzbuzz.test.js, Write one test case for each acceptance criteria above,
// using one it block for each, and matchers to test the function's return value.
// Write the fizzBuzz function in the file fizzbuzz.js to the four tests pass.

const fizzBuzz = require('./fizzbuzz.js');

describe('fizzBuzz', () => {
    it('returns "Fizz" for 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('returns "Buzz" for 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('returns "8" for 8', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
    it('returns "FizzBuzz for 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
});
