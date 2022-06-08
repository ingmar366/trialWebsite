class PagesView {
  _buttonNext = document.querySelector(`.arr-forward`);
  _buttonPrev = document.querySelector(`.arr-back`);
  _pages = document.querySelector(`.pages`);

  buttonNextPreviousDisplay(page) {
    // updating arrows based on which page you are
    page === 0
      ? this._buttonPrev.classList.add(`hidden`)
      : this._buttonPrev.classList.remove(`hidden`);

    page === 2
      ? this._buttonNext.classList.add(`hidden`)
      : this._buttonNext.classList.remove(`hidden`);
  }

  addHandelerNextPage(handler) {
    //  checking for click on the next button
    this._buttonNext.addEventListener("click", function (e) {
      handler(1);
    });
  }
  addHandlerPreviousPage(handler) {
    //  checking for click on the previous button
    this._buttonPrev.addEventListener("click", function (e) {
      handler(-1);
    });
  }

  updatePage(page) {
    // updating which page will be displayed based on the data from the model
    const translateValue = `translate(${page * -100}%)`;
    console.log(translateValue);
    this._pages.style.transform = translateValue;
    this.buttonNextPreviousDisplay(page);
  }
}

export default new PagesView();
