const express = require('express');
const ejs = require('ejs'); // mustache / jade / handlebars
const _ = require('underscore');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
    const bros = 'Groucho Harpo Chico Zeppo'.split(' ');
    const randomBrother = _(bros).sample();
    res.render('home.ejs', {brother: randomBrother, lucky: _.random(100)}); // "Instance variables"
});

server.get('/hello', (req, res) => {
    res.send('Hello cruel world');
});

server.get('/goodbye', (req, res) => {
    res.send('Goodbye cruel world, thanks for all the fish!');
});

// Dynamic URLs
server.get('/fanclub/:name', (req, res) => {
    console.log(req.params);
    res.send(`${ req.params.name} is a member of the fanclub`);
});

// Crappy calculator
server.get('/calc/:x/:y/:operator', (req, res) => {
    let answer;
    if (req.params.operator === '+') {
        answer = Number(req.params.x) + Number(req.params.y);
    } else if (req.params.operator === '-') {
        answer = Number(req.params.x) - Number(req.params.y);
    } // todo: handle multiplication and division
    res.render('calc.ejs', {answer: answer});
});

// Render JSON
server.get('/info.json', (req, res) => {
    res.json({
        name: 'Groucho',
        instrument: 'guitar',
        vice: 'cigars',
        luckyNumber: _.random(40)
    });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));

