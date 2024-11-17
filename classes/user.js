// file: user.js

// We would like to implement a class to represent a user account. Here is how we should be able to use this class:

// > const user = new User('Uma');

// > user.getName(); 
// 'Uma'

// > user.getIntroduction();
// 'Hi, my name is Uma'

class User {

    constructor(firstname) {
        this.firstname = firstname;
    }

    getName() {
        return this.firstname;
    }

    getIntroduction() {
        return `Hi, my name is ${this.firstname}`
    }
}

module.exports = User;
