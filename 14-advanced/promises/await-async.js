// await/async: an evolution of promises

const fs = require('fs'); // filesystem: part of the standard library for Node.js

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
// });

const printFlintstones = async function () {
    const data = await readFile('flintstones.txt');
    console.log(data);
    console.log('the promise is now fulfilled');
    console.log('thank you for using this program');
};

printFlintstones();

// axios ////////////////////////////////////////////////////////////
const axios = require('axios');

// old school promises
axios.get('http://numbersapi.com/random/trivia').then(({data}) => {
    console.log(data);
});

const numberFact = async () => {
    const { data } = await axios.get('http://numbersapi.com/random/trivia');
    console.log(data);
};

numberFact();

