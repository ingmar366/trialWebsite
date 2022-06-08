class PopupView {
  _meImg = document.querySelector(`.me__image`);
  _mePopup = document.querySelector(`.me__popup`);
  _overlay = document.querySelector(`.me__overlay`);
  _btnClose = document.querySelector(`.me__popup-btn-close`);
  _btnContact = document.querySelector(`.me__popup-contact`);

  popupShowHide() {
    //   show and hide popup window
    this._meImg.classList.toggle(`position-popup`);
    setTimeout(() => {
      this._overlay.classList.toggle(`hidden`);
      this._mePopup.classList.toggle(`hidden`);
    }, 175);
  }

  addHandlerCloseAndOverlay(handler) {
    //   button clicks to close popup
    [this._overlay, this._btnClose].forEach((a) =>
      a.addEventListener("click", function () {
        handler(false);
      })
    );
  }

  addHandlerContact(handler) {
    //   add event to contact clicking
    this._btnContact.addEventListener("click", function () {
      handler(3);
    });
  }
}

export default new PopupView();
