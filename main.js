const quoteContainer = document.getElementById('js-quote-container');
const quoteText = document.getElementById('js-quote');
const authorName = document.getElementById('js-author');
const twitterBtn = document.getElementById('js-twitter');
const newQuoteBtn = document.getElementById('js-new-quote');
const loader = document.getElementById('js-loader');

function startLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden =true
    }
}

// Get Quote From API
async function getQuote() {
    startLoadingSpinner();
    const proxyUrl = 'https://damp-garden-72716.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // If Author is blank, add 'Unknown'
        if (data.quoteAuthor === '') {
            authorName.innerText = 'Unknown';
        } else {
            authorName.innerText = data.quoteAuthor;
        }
        // Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        removeLoadingSpinner();
    } catch (error) {
        console.log(Error);
        getQuote();
    }
}

function tweetQuote() {
    // Create tweet text and replace blank to %20
    const tweetText = String(`${quoteText.innerText} - ${authorName.innerText}`).replace(' ', '%20');
    // Create TweetUrl
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
};

// Reload Quote When New Quote Btn is clicked
newQuoteBtn.addEventListener('click', getQuote);

// Tweet Quote When TwitterBtn is clicked
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();
