class GetQuote {
  constructor() {
    this.proxyUrl = 'https://damp-garden-72716.herokuapp.com/';
    this.apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    this.quoteText = document.querySelector('#js-quote');
    this.authorName = document.querySelector('#js-author');
    this.twitterBtn = document.querySelector('#js-twitter');
  }

  async getQuote() {
    const spinner = new Spinner('#js-quote-container');
    spinner.start();
    try {
      const response = await fetch(this.proxyUrl + this.apiUrl);
      const data = await response.json();
      this._showTweet(data);
      spinner.remove();
    } catch (error) {
      console.log(error);
      getQuote();
    }
  }

  _showTweet(data) {
    // If Author is blank, add 'Unknown'
    data.quoteAuthor = ''
      ? (this.authorName.textContent = 'Unknown')
      : (this.authorName.textContent = data.quoteAuthor);

    // Reduce font size for long quotes
    data.quoteText.length > 120
      ? this.quoteText.classList.add('long-quote')
      : this.quoteText.classList.remove('long-quote');

    this.quoteText.textContent = data.quoteText;
  }
}
