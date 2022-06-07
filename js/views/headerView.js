class headerView {
  _projects = document.querySelector(`.header__nav-1`);
  _contact = document.querySelector(`.header__nav-2`);
  _robot = document.querySelector(`.robot`);
  _draw = document.querySelector(`.svg path`);

  addHandlerProjects(handler) {
    this._projects.addEventListener("click", function () {
      handler(1);
    });
  }
  addHandlerContact(handler) {
    this._contact.addEventListener("click", function () {
      console.log(this._draw);
      // handler(2);
    });
  }

  async robotBoardAnimation() {
    try {
      this._robot.addEventListener(`load`, function (e) {
        console.log(this._draw);

        // this._draw.style.animation = "animate 2s linear";
        // this._draw.animationFillMode = "forwards";
      });
    } catch (err) {
      err.message("Could not load animation");
    }
  }
}

export default new headerView();
