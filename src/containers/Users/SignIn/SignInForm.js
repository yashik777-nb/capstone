import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SignIn from "../../../components/SignIn/SignIn";
import * as actionCreators from "../../../store/actions/actionsIndex";

class SingInForm extends React.Component {
  onSave(user) {
    this.props.authenticateUser(user);
    this.props.history.push("/issues");
  }

  onRegister() {
    this.props.history.push("/register");
  }

  render() {
    return (
      <SignIn
        onSave={(user) => this.onSave(user)}
        register={() => this.onRegister()}
      />
    );
  }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (user) => dispatch(actionCreators.authenticateUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(SingInForm));
