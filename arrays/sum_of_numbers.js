// file: sum_of_numbers.js

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach((number) => {
    sum += number;
})

console.log(sum); // expected 55


const newNumbers = [4, 5, 2, 3, 7, 4, 5, 6, 2, 3, 5, 9, 7, 8];

let newSum = 0;

newNumbers.forEach((number) => {
    newSum += number;
})

console.log(newSum); // expected 70