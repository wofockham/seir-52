// Callbacks Review

// A callback function is a function typically passed to another function.
// The callback function GETS CALLED FOR YOU, later, at some point in time.

// Javascript is asynchronous.

// Timers: A, C, ... B
console.log('A');
setTimeout(function () {
    console.log('B: time has passed');
}, 6000);
console.log('C');

// jQuery's document ready: I, III, II
console.log('I');
$(document).ready(function () {
    console.log('II');
});
console.log('III');

// Event handlers: Groucho, Chico AND MAYBE LATER Harpo (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
    console.log('Harpo');
});
console.log('Chico');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Ruby:
// colors.each do |c|
//   puts c
// end

// Traditional JS:
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// };

// ES5:
colors.forEach(function (c) {
    console.log(c);
});

// You are not expected to understand this (yet)
const each = function (someArray, callbackFunction) {
    for (let i = 0; i < someArray.length; i++) {
        callbackFunction( someArray[i] );
    }
};

each(colors, function (col) {
    console.log('from my very own each()', col);
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
    console.log(`${ brother } Marx`);
});

each('AJAX', function (char) {
    console.log(char.toLowerCase());
});