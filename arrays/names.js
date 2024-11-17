// file: names.js

const friendNames = ['Jessi', 'Michael', 'Rose', 'Livie'];

// print array length

console.log(friendNames.length) // expected 4

// print second person in array

console.log(friendNames[1]); // expected Michael

// create a new array and add a name

newFriendNames = friendNames.concat('Sam');
console.log(newFriendNames) // expected ['Jessi', 'Michael', 'Rose', 'Livie', 'Sam']
console.log(newFriendNames.length); // expected 5