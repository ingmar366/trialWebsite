export const state = {
  page: 0,
  popup: false,
};

export const updatePageData = function (value) {
  state.page += value;
};

export const popupState = function (curState) {
  state.popup = curState;
};
