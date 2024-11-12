// file: evenOrOdd.js
// basic for loop

const evenOrOdd = (num) => {
    for(let num = 1; num <= 20; num++) {
        if (num % 2 === 0) {
            console.log(num + ' is even')
        } else if (num % 2 === 1) {
            console.log(num + ' is odd')
        }
    }
}

module.exports = evenOrOdd;