const state = {
    currentPage: 1,
    lastPageReached: false
};

const searchFlickr = function (keywords) {
    if (state.lastPageReached) return;

    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // please don't be bored enough to read up on this
        page: state.currentPage++
    }).done(showImages).done(function (info) {
        console.log(info);
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        }
    });

};

const showImages = function (results) {
    results.photos.photo.forEach(function (photo) {
        const thumbnailURL = generateURL(photo);
        const $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images');
    });
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see docs)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disable the form from being submitted to a server.

        state.currentPage = 1;
        state.lastPageReached = false;
        $('#images').empty();

        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
    });

    // Higher Order Function (HOF)
    const relaxedSearchFlickr = _.debounce(searchFlickr, 4444, true); // leading edge (don't wait to run)

    // Twitchy!
    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 777) { // TODO: adjust the number to suit your taste.
            const searchTerm = $('#query').val();
            relaxedSearchFlickr(searchTerm);
        }
    });
});