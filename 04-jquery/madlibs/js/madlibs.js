const makeMadLib = function () {
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `<li>${ name } really likes ${ adjective } ${ noun }.</li>`;

    $('#story').prepend(story);
};

$('#lib-button').on('click', makeMadLib);
