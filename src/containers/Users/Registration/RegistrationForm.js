import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import Registration from "../../../components/Registration/Registration";
import Registration from "../../../components/Registration/Registration";
import * as actionCreator from "../../../store/actions/actionsIndex";
class RegistrationForm extends React.Component {
  registerUserHandler(user) {
    this.props.registerUser(user);
    this.props.history.push("/");
  }

  toSignIn() {
    this.props.history.push("/signin");
  }

  render() {
    // return <Registration onSave={(user) => this.registerUserHandler(user)} />;
    return (
      <Registration
        onSave={(user) => this.registerUserHandler(user)}
        signIn={() => this.toSignIn()}
      />
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(actionCreator.addUser(user)),
  };
};

export default connect(null, mapDispathToProps)(withRouter(RegistrationForm));
