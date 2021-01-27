document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this.quote = new GetQuote();
    this.tweet = new Tweet();
    this._init();
    this._addEvent();
  }

  _init() {
    // On Load
    this.quote.getQuote();
  }

  _addEvent() {
    const twitterBtn = document.getElementById('js-twitter');
    const newQuoteBtn = document.getElementById('js-new-quote');

    // Reload Quote When New Quote Btn is clicked
    newQuoteBtn.addEventListener('click', () => location.reload());

    // Tweet Quote When TwitterBtn is clicked
    twitterBtn.addEventListener('click', this.tweet.tweetQuote);
  }
}
