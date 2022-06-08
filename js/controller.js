import * as model from "./model.js";
import pagesView from "./views/pagesView";
import headerView from "./views/headerView";
import popupView from "./views/popupView.js";
import projectsView from "./views/projectsView.js";

const controlPage = function (direction) {
  // calls the update page function in the moddel and calls update function so the correct page is being displayed
  if (direction === 3) {
    popupView.popupShowHide();
    direction -= 1;
  }
  model.updatePageData(direction);
  pagesView.updatePage(model.state.page);
};
/////////////////////////////////////////////////
const controlPopup = function (curState) {
  //calls up the window and update if the model is active or not
  model.popupState(curState);
  popupView.popupShowHide();
};

/////////////////////////////////////////////////

const init = function () {
  //pagesview
  pagesView.buttonNextPreviousDisplay(model.state.page);
  pagesView.addHandelerNextPage(controlPage);
  pagesView.addHandlerPreviousPage(controlPage);
  //headerview
  headerView.addHandlerProjects(controlPage);
  headerView.addHandlerContact(controlPage);
  headerView.robotBoardAnimation();
  headerView.addHandlerMe(controlPopup);
  // popupview
  popupView.addHandlerCloseAndOverlay(controlPopup);
  popupView.addHandlerContact(controlPage);
};

init();
