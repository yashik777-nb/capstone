import React from "react";
import IssueForm from "../../components/IssueForm/IssueForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators/IssuesActionCreator";

class NewIssue extends React.Component {
  addIssue(issue) {
    this.props.addIssue(issue);
    this.props.history.push("/");
  }

  render() {
    return <IssueForm onSave={(issue) => this.addIssue(issue)} />;
  }
}

// mapStoreToProps

//mapDispatcherToProps
const mapDispatcherToProps = (dispatch) => {
  return {
    addIssue: (issue) => dispatch(actionCreators.addIssue(issue)),
  };
};

export default connect(null, mapDispatcherToProps)(withRouter(NewIssue));
