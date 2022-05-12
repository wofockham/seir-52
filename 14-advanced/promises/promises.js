// Promises are an evolution of callbacks.
// a way to handle or process data from an asynchronous process, whenever that finishes.

// Promises mean you should use .then (and maybe .catch)

const fs = require('fs'); // filesystem: part of the standard library for Node.js

// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//     if (err) {
//         throw err; // dramatic return
//     }

//     console.log(content);
// });

// A Promise wrapper around the above fs.readFile
const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, content) => {
            if (err) {
                return reject(err); // invoke all the .catch() methods
            }

            resolve(content); // invoke all the .then() methods
        });
    });
};

// readFile('flintstones.txt').then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('oh shit', err);
// });

const fileReaderPromise = readFile('flintstones.txt');

fileReaderPromise.then((c) => {
    console.log(c);
});

setTimeout(() => {
    fileReaderPromise.then((content) => {
        console.log('this still runs even though it was attached 7 seconds later');
        console.log(content);
    });
}, 7000);