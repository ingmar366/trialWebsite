import * as model from "./model.js";
import pagesView from "./views/pagesView";
import headerView from "./views/headerView";

const controlPage = function (direction) {
  model.updatePageData(direction);
  pagesView.updatePage(model.state.page);
};
/////////////////////////////////////////////////

/////////////////////////////////////////////////

const init = function () {
  pagesView.buttonNextPreviousDisplay(model.state.page);
  pagesView.addHandelerNextPage(controlPage);
  pagesView.addHandlerPreviousPage(controlPage);
  //
  headerView.addHandlerProjects(controlPage);
  headerView.addHandlerContact(controlPage);
  headerView.robotBoardAnimation();
};

init();
