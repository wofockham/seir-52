// # Exercises: if/else statements

// ## What number's bigger?

// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(`The greater number of 5 and 10 is ${ greaterNum(5, 10) }.`);
console.log(`The greater number of 15 and 10 is ${ greaterNum(15, 10) }.`);
console.log(`The greater number of 23 and 0 is ${ greaterNum(23, 0) }.`);
console.log(`The greater number of 7 and 7 is ${ greaterNum(7, 7) }.`);

// ## The World Translator

// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function (code) {
    if (code === 'es') {
        return 'Hola mundo!';
    } else if (code === 'de') {
        return 'Hallo Welt!';
    }

    return 'Hello World!';
};

console.log( helloWorld('es') );
console.log( helloWorld('de') );
console.log( helloWorld('en') );
console.log( helloWorld('jp') );

// ## The Grade Assigner

// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function (score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else { // default
        return 'F';
    }
};

console.log( assignGrade(15) ); // F
console.log( assignGrade(55) ); // D
console.log( assignGrade(65) ); // C
console.log( assignGrade(75) ); // B
console.log( assignGrade(100) ); //A


// ## The Pluralizer

// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function (noun, number) {
    if (number === 1) {
        console.log(`${ number } ${ noun }`);
    } else {
        console.log(`${ number } ${ noun }s`);
    }
};

pluralize('dog', 1);
pluralize('cat', 0); 