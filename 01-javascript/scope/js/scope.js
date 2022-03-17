// The difference between var, let and const

// 0. const
// 1. let
// 2. (var)

// Scopes -- what information is visible at different points in your code

// Global scope /////////////////////////////////////////////////////
const globalMessage = 'Hello Cruel World';

const showGlobalMessage = function () {
    console.log('I can see the globalMessage', globalMessage); // globalMessage is in the global scope
};

showGlobalMessage();
console.log('Still global', globalMessage);

// Function scope ///////////////////////////////////////////////////
const showLocalMessage = function () {
    const localMessage = 'Goodbye Cruel World';
    console.log('I can see the localMessage', localMessage);
};

showLocalMessage();
// console.log('That local variable', localMessage); // out of scope: crashes

// ES6 introduced block scope -- why? ///////////////////////////////
// var inside a block
if (1000 > 2) {
    var hotdogs = Infinity; // global variable
    console.log(hotdogs);
}
console.log('how many hotdogs?', hotdogs); // still in scope

// let inside a block
if (1000 > 2) {
    let goldfish = 7; // block scope -- NOT global
    console.log(goldfish); // still in scope => 7
}
// console.log('how many goldfish?', goldfish); // out of scope: crashes

// const inside a block 
if (1000 > 2) {
    const pies = 3; // block scope -- NOT global
    console.log(pies); // still in scope => 3
}
// console.log('how many pies?', pies); // out of scope: crashes

// Practical example: why this was added to JS //////////////////////
var bros = ['Groucho', 'Harpo', 'Chico'];
for (let i = 0; i < bros.length; i++) {
    console.log(bros[i]);
}

console.log('wtf does i still exist', i);