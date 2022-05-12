// let id = 0; // global variable: bad
// const nextID = function () {
//     return id++;
// };

// Higher Order Function
// A function that returns a function

// const helloMaker = function () {
//     const greeting = 'Hello World';

//     return function () {
//         console.log(greeting);
//     }
// };

// const hey = helloMaker();
// hey(); // greeting still exists for hey() because it lives in a closure.

const nextIDMaker = function () {
    let id = 0;

    return function () {
        return id++;
    }
};

const nextID = nextIDMaker();

/////////////////////////////////////////////////////////////////////
// HTML Helpers
// const p = function (content) {
//     return `<p>${ content }</p>`;
// };

// const h1 = function (content) {
//     return `<h1>${ content }</h1>`;
// };

// const h2 = function (content) {
//     return `<h2>${ content }</h2>`;
// };

// const span = function (content) {
//     return `<span>${ content }</span>`;
// };

const tagMaker = function (tagName) {
    return function (content) {
        return `<${ tagName }>${ content }</${ tagName }>`;
    }
};

const p = tagMaker('p');
const h1 = tagMaker('h1');
const h2 = tagMaker('h2');
const span = tagMaker('span');