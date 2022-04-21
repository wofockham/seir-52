const fetchCover = function (event) {
    event.preventDefault();

    const title = $('#title').val();
    $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(function (data) {
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        $('#cover').attr('src', cover);
    });
};

$('#search').on('submit', fetchCover);
