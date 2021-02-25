import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SignIn from "../../../components/SignIn/SignIn";
import * as actionCreators from "../../../store/actions/actionsIndex";

class SingInForm extends React.Component {
  async onSave(user) {
    user.id = 1;
    await this.props.authenticateUser(user);
    if (this.props.authenticated) this.props.history.push("/issues");
    else console.log("not authenticated");
  }

  render() {
    return <SignIn onSave={(user) => this.onSave(user)} />;
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    authenticated: state.users.authenticated,
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (user) => dispatch(actionCreators.authenticateUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingInForm));
