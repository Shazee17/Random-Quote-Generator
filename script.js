let apiQuotes = [];
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-button');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');

async function fetchQuotes(){
    const apiURL = 'https://dummyjson.com/quotes';

    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert('Error');
    } 
}

function newQuote(){
    const quote = apiQuotes.quotes[Math.floor(Math.random() * apiQuotes.quotes.length)];
    
        quoteText.textContent = quote.quote; 
        quoteAuthor.textContent =  `- ${quote.author}`;

    if (quote.quote.length > 120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }    
}

function tweet(){
    const url =  `http://twitter.com/intent/tweet?text=${quoteText.textContent} ${quoteAuthor.textContent}`; 
    window.open(url, '_blank'); 
}


tweetBtn.addEventListener('click', tweet);
newQuoteBtn.addEventListener('click', newQuote);


fetchQuotes();






