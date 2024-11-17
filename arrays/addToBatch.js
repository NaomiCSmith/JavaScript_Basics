// file: addToBatch.js

// You are helping your friend, who owns a candies business, with their website. Every order placed on the website
// gets assigned an order ID, such as 1274.

// Your friend would like to create batches of five order IDs. They ask you if you could give a hand and write a small
// program to do this.

const addToBatch = (array, number) => {
    if (array.length >= 5) {
        return array;
    }

    return array.concat(number);
    }

module.exports = addToBatch;