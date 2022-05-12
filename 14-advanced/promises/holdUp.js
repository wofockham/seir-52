// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then)

const holdUp = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

/* Alternatives: */

// const holdUp = (duration) => new Promise((resolve) => { // implicit return
//     setTimeout(resolve, duration);
// });

// No curlies: implicit return all the way down
// const holdUp = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

holdUp(3000).then(() => {
    console.log('3 seconds have passed');
}).then(() => {
    console.log('also...');
});
