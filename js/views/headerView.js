class HeaderView {
  _projects = document.querySelector(`.header__nav-1`);
  _contact = document.querySelector(`.header__nav-2`);
  _me = document.querySelector(`.me__image`);
  _robot = document.querySelector(`.robot`);
  _draw = document.querySelector(`.draw`);
  _boardTextDigital = document.querySelector(`.header__text-board-board-1`);
  _boardTextSolutions = document.querySelector(`.header__text-board-board-2`);
  _boardGlowDigital = document.querySelector(`.header__text-board-board-3`);
  _boardGlowSolutions = document.querySelector(`.header__text-board-board-4`);

  ////////////////////////////////////////////////////
  // buttons

  addHandlerProjects(handler) {
    // adds handeler on project button
    this._projects.addEventListener("click", function () {
      handler(1);
    });
  }
  addHandlerContact(handler) {
    // adds handeler on contact button
    this._contact.addEventListener("click", function () {
      handler(2);
    });
  }

  ////////////////////////////////////////////////////
  // clicking image
  addHandlerMe(handler) {
    this._me.addEventListener(`click`, function () {
      handler(true);
    });
  }

  ////////////////////////////////////////////////////
  // animation
  robotBoardAnimation() {
    // listening to load of the robot gif and calls animation handler
    this._robot.addEventListener(`load`, this._animationHandler.bind(this));
  }

  _animationHandler() {
    // makes with the timing the board animations work
    setTimeout(() => this._draw.classList.add(`animation`), 3500);
    setTimeout(() => {
      this._boardTextDigital.classList.add(`board-shadow-green`);
      this._boardTextSolutions.classList.add(`board-shadow-pink`);
      this._boardGlowDigital.classList.add(`board-shadow-green`);
      this._boardGlowSolutions.classList.add(`board-shadow-pink`);
    }, 12500);
  }
}

export default new HeaderView();
