class GetQuote {
  constructor() {
    this.proxyUrl = 'https://damp-garden-72716.herokuapp.com/';
    this.apiUrl = 'https://type.fit/api/quotes';
    this.quoteText = document.querySelector('#js-quote');
    this.authorName = document.querySelector('#js-author');
    this.twitterBtn = document.querySelector('#js-twitter');
  }

  async getQuote() {
    const spinner = new Spinner('#js-quote-container');
    spinner.start();
    try {
      const response = await fetch(this.proxyUrl + this.apiUrl);
      const apiQuotes = await response.json();
      const randomQuote = this._newQuote(apiQuotes);
      this._showTweet(randomQuote);
      spinner.remove();
    } catch (error) {
      console.log(error);
      // getQuote();
    }
  }

  _newQuote(apiQuotes) {
    // Pick a random quote from apiQuotes array
    const randomNumber = Math.floor(Math.random() * apiQuotes.length);
    const randomQuote = apiQuotes[randomNumber];
    return randomQuote;
  }

  _showTweet(randomQuote) {
    // If Author is blank, add 'Unknown'
    randomQuote.author = ''
      ? (this.authorName.textContent = 'Unknown')
      : (this.authorName.textContent = randomQuote.author);

    // Reduce font size for long quotes
    randomQuote.text.length > 120
      ? this.quoteText.classList.add('long-quote')
      : this.quoteText.classList.remove('long-quote');

    this.quoteText.textContent = randomQuote.text;
  }
}
