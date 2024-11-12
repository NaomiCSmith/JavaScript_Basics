// file: lowerCaseMessage.js

const lowerCaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

transform('WHY ARE YOU SHOUTING?', lowerCaseMessage);