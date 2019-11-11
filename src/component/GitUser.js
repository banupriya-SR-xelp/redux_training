import React, { Component } from "react";

export default class GitUser extends Component {
  componentDidMount() {
    this.props.getGitUser();
  }
  render() {
    console.log("git user props", this.props);
    console.log(
      "userData",
      this.props.gitUserData && this.props.gitUserData.userData
    );
    return <div className="gituserHolder">GitUser</div>;
  }
}
