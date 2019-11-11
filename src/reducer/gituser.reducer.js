import * as gituserAction from "../action/gituser.action.js";

const gituserReducer = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.type) {
    case gituserAction.GIT_USER_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    case gituserAction.GIT_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userData: action.userData,
        status: action.status
      });

    case gituserAction.GIT_USER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });
  }
};
export default gituserReducer;
