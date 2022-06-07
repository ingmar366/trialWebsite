class pagesView {
  _buttonNext = document.querySelector(`.arr-forward`);
  _buttonPrev = document.querySelector(`.arr-back`);
  _pages = document.querySelector(`.pages`);

  buttonNextPreviousDisplay(page) {
    // updating arrows based on which page you are
    if (page === 0) {
      this._buttonPrev.classList.add(`hidden`);
      this._buttonNext.classList.remove(`hidden`);
    }

    if (page === 1) {
      this._buttonPrev.classList.remove(`hidden`);
      this._buttonNext.classList.remove(`hidden`);
    }
    if (page === 2) {
      this._buttonNext.classList.add(`hidden`);
      this._buttonPrev.classList.remove(`hidden`);
    }
  }

  addHandelerNextPage(handler) {
    this._buttonNext.addEventListener("click", function (e) {
      handler(1);
    });
  }
  addHandlerPreviousPage(handler) {
    this._buttonPrev.addEventListener("click", function (e) {
      handler(-1);
    });
  }

  updatePage(page) {
    const translateValue = `translate(${page * -100}%)`;
    console.log(translateValue);
    this._pages.style.transform = translateValue;
    this.buttonNextPreviousDisplay(page);
  }
}

export default new pagesView();
