const readline = require('readline');
const chalk = require('chalk');

// it really is this much trouble:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter some text:', function (response) {
    console.log('Thank you for typing', chalk.red(response));
    rl.close();
});

