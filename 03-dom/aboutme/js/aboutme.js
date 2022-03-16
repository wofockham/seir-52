// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-seif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

// Alternatively:
document.getElementById('favorites').innerHTML = 'cream cheese bagels';
document.getElementById('hometown').innerHTML = 'Sydney';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const lis = document.getElementsByTagName('li');

for (let i = 0; i < lis.length; i++) {
    const item = lis[i];
    item.className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const image = document.createElement('img'); // detached DOM node
image.src = 'http://www.fillmurray.com/250/400';
document.body.appendChild(image);