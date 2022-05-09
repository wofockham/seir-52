// recreate `cat` in JS

const fs = require('fs'); // fs is from the built-in Node.JS standard library

// Synchronous: wrong! -- not enough callbacks!
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log(fileData);

// Asynchronous: right!
// Many asynchronous Node.js functions implement the Error First Pattern
fs.readFile('simpsons.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.error(error); // a bit wanky
    }
    console.log(data);
});

console.log('this will appear first');