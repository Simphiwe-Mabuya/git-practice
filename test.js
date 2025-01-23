let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#new-quote");

function pickFromArray(choices) {

    return choices[Math.floor(Math.random() * choices.length)];
}

btn.addEventListener("click", () => {
    let randomQuote = pickFromArray(quotes);

    let text = randomQuote.quote;
    let person = randomQuote.author;

    quote.textContent = text;
    author.textContent = person;

});

window.onload = () => {
    let firstQuote = quotes[2]; // first quote just after the page loads
    quote.textContent = firstQuote.quote;
    author.textContent = firstQuote.author;
};