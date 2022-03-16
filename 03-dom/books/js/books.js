const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

const list = document.createElement('ul'); // detached DOM node <ul></ul>

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const listItem = document.createElement('li'); // detached DOM node
    listItem.innerHTML = `${ book.title } by ${ book.author }`;

    if (book.alreadyRead) {
        listItem.className = 'alreadyRead';
    }

    list.appendChild(listItem);
}

document.body.appendChild(list);
