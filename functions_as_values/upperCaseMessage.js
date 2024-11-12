// file: upperCaseMessage.js

const upperCaseMessage = (message) => {
    return message.toUpperCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

transform('hello', upperCaseMessage);