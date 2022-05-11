const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

axios.get(sourceURL).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html); // see docs
    const $rows = $('table table tr:nth-child(n+2)'); // I spent actually hours on this.

    const entries = [];

    $rows.each(function () { // need `this` we can't use an arrow function.
        const $cells = $('td', this);

        const entry = {
            sound: $cells.eq(0).text(),
            description: $cells.eq(1).text(),
            source: $cells.eq(2).text(),
            title: $cells.eq(3).text()
        };

        entries.push(entry);
    });

    // See docs for JSON.stringify to understand indentation:
    fs.writeFile('./martin.json', JSON.stringify(entries, null, 2), () => {
        console.log(`martin.json saved: ${ entries.length } entries`);
    });
});

