const fetchFact = function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
    xhr.send(); // asynchronous

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // exit the function: nothing to do yet
        }

        const data = JSON.parse(xhr.responseText); // turns the responseText STRING into a real JS object

        const p = document.createElement('p');
        p.innerHTML = data.text;
        document.body.appendChild(p);
    };
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact is free