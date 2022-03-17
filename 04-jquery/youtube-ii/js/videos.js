const $links = $('a');

for (let i = 0; i < $links.length; i++) {
    const $link = $links.eq(i); // access the element as a jQuery object
    const href = $link.attr('href'); // returns a string

    const thumbnailURL = youtube.generateThumbnailUrl(href);
    const $image = $('<img>'); // detached jQuery object
    $image.attr('src', thumbnailURL);

    $link.prepend($image);
}

// Goals: Aim for this level
// $('a').each(function () {
//     const href = $(this).attr('href');
//     const thumbnailURL = youtube.generateThumbnailUrl(href);
//     $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
// });

