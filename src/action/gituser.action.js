//requesting,success,failure
//requesting show loader
//sucesss stop loader and display data
//failure stop loader show error message
export const GIT_USER_REQUESTING = "GIT_USER_REQUESTING";
export const GIT_USER_SUCCESS = "GIT_USER_SUCCESS";
export const GIT_USER_FAILURE = "GIT_USER_FAILURE";

export function gituserRequesting() {
  return {
    type: GIT_USER_REQUESTING,
    status: "REQUESTING"
  };
}

export function gituserSucess(data) {
  return {
    type: GIT_USER_SUCCESS,
    status: "SUCCESS",
    userData: data
  };
}

export function gituserFailure(error) {
  return {
    type: GIT_USER_FAILURE,
    status: "FAILURE",
    error
  };
}

export function getGituser() {
  return async (dispatch, getState) => {
    dispatch(gituserRequesting());
    try {
      const result = await fetch(`http://api.github.com/users`);
      if (result.error) {
        throw result.error;
      }
      const resultJson = await result.json();
      return dispatch(gituserSucess(resultJson));
    } catch (e) {
      return dispatch(gituserFailure(e.message));
    }
  };
}
