// This function accepts no arguments
const printMessage1 = () => {
    console.log('Hello World!');
    }

// This function accepts one parameter
const printMessage2 = (message) => {
    console.log(message);
    }
// A function must be called before it runs:
printMessage2('Hello World!');


// getName function
const getName = () => {
    return 'Naomi';
    };

getName(); // returns 'Naomi
