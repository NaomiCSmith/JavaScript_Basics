// file: userbase.js

// Given the following array of User instances (the class from the previous exercise):

// const users = [
//   new User('Uma'),
//   new User('Josh')
// ];

// We'd now like to have a class UserBase that behaves like this:

// > const userBase = new UserBase(users);

// > userBase.count();
// 3

// > userBase.getNames();
// [ 'Uma', 'Josh' ]

// > userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
// ]

class Userbase {

    constructor(arrayOfUsers) {
        this.users = arrayOfUsers;
    }

    count() {
        return this.users.length;
    }

    getNames() {
        return this.users.map((user => user.getName()))
    }

    getIntroductions() {
        return this.users.map((user => user.getIntroduction()))
    }
}

module.exports = Userbase;
