// file: notify.js

const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
}

const notifyByText = (text) => {
    return `Text sent to: ${text}`;
}

const notify = (emailOrText, notifyFunction) => {
    return notifyFunction(emailOrText);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+100000000000', notifyByText));
