class Spinner {
  constructor(element) {
    this.container = document.querySelector(element);
    this.loader = document.querySelector('#js-loader');
  }

  start() {
    this.loader.hidden = false;
    this.container.hidden = true;
  }

  remove() {
    this.loader.hidden = true;
    this.container.hidden = false;
  }
}
