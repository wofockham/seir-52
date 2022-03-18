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

const $list = $('<ul></ul>');

for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const $listItem = $(`<li>${ book.title } by ${ book.author }</li>`)

    if (book.alreadyRead) {
        $listItem.addClass('alreadyRead');
    }

    $list.append($listItem);
}

$list.appendTo('body');