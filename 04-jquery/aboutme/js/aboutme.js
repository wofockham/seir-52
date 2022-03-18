// // (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$('body').css('font-family', 'Arial, sans-serif'); // two strings OR an object
// $('body').css({'font-family': 'Arial, sans-serif'});

// // (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const $nickname = $('#nickname');
$nickname.text('The Blade');

// // Alternatively:
$('#favorites').html('cream <em>cheese</em> bagels');
$('#hometown').text('Sydney');

// // Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// const lis = document.getElementsByTagName('li');

$('li').addClass('listitem');

// // Create a new img element and set its src attribute to a picture of you. Append that element to the page.
// const image = document.createElement('img'); // detached DOM node
$('<img src="http://www.fillmurray.com/250/400">').appendTo('body');
