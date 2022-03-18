$('#name').on('focus', function () {
    $('header').addClass('active');
}).on('blur', function () {
    $('header').removeClass('active');
}).on('keyup', function () {
    const name = $('#name').val();
    $('header h1').text('Welcome ' + name);
});

$('button').on('click', function () {
    $(this).toggleClass('enabled');
});
