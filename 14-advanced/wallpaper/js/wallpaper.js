$(document).ready(function () {
    $('#subreddit').on('blur', function () {
        const subs = $(this).val();
        fetchImages(subs);
    });

    let timer = null;

    const fetchImages = (subreddits) => {
        clearTimeout(timer);
        $('.wallpaper').remove();

        $.getJSON(`https://api.reddit.com/r/${ subreddits }.json?limit=100`).done((response) => {
            response.data.children.forEach((child) => {
                // todo: accept other file formats
                if (child.data.url.endsWith('jpg') || child.data.url.endsWith('png')) {
                    const url = `url(${ child.data.url })`;
                    $('<div class="wallpaper">').css('background-image', url).appendTo('body');
                }
    
                const fadeNext = function (nth) {
                    if (nth >= $('.wallpaper').length) {
                        nth = 0;
                    }
    
                    $('.wallpaper').removeClass('show').eq(nth).addClass('show');
                    timer = setTimeout(() => fadeNext(nth + 1), 5000); // recursion
                }
    
                fadeNext(0);
            });
        });
    };
});