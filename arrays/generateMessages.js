// file : generateMessages.js

// Write a function generateMessages that takes an array of names and returns an array of personalised messages
// for each name. For example, when given the array above, the function should return an array with the first
// element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string
// 'Hi Laura! 50% off our best candies for you today!', and so on.


const customers = {
    'Buttercup': {
        discount: 40,
    },
    'Bubbles': {
        discount: 50,
    },
    'Blossom': {
        discount: 60,
    },
};

const generateMessages = (customers) => {
    return Object.entries(customers).map(([names, properties]) => {
        return `Hi ${names}! ${properties.discount}% off our best candies for you today!`;
        });
};

const messages = generateMessages(customers);
console.log(messages);
