class Tweet {
  tweetQuote() {
    const quoteText = document.querySelector('#js-quote');
    const authorName = document.querySelector('#js-author');

    // Create tweet text and replace blank to %20
    const tweetText = String(`${quoteText.innerText} - ${authorName.innerText}`).replace(
      ' ',
      '%20'
    );
    // Create TweetUrl
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
  }
}
