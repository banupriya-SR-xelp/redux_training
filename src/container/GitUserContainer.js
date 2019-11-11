import { getGituser } from "../action/gituser.action.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GitUser from "../component/GitUser.js";

const mapDispatchToProps = dispatch => {
  return {
    getGitUser: () => {
      dispatch(getGituser());
    }
  };
};
const mapStateToProps = state => {
  return {
    gitUserData: state
  };
};

const GitUserContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GitUser)
);

export default GitUserContainer;
