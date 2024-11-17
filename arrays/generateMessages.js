// file : generateMessages.js

// Write a function generateMessages that takes an array of names and returns an array of personalised messages
// for each name. For example, when given the array above, the function should return an array with the first
// element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string
// 'Hi Laura! 50% off our best candies for you today!', and so on.


const customerNames = [
    'Buttercup',
    'Bubbles',
    'Blossom'
];

const generateMessages = (customerNames) => {
    return customerNames.map((names) => (`Hi ${names}! 50% off our best candies for you today!`));
}

const messages = generateMessages(customerNames);
console.log(messages);
