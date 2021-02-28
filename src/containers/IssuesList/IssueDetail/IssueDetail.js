import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({});
class IssueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {},
    };
  }
  componentDidMount() {
    const selectedIssue = this.props.issues.filter(
      (issue) =>
        issue.issueDescription === this.props.match.params.issueDescription
    );
    console.log(selectedIssue);
    this.setState({ issue: selectedIssue[0] });
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h1>Issue Details</h1>
        <p>
          <strong>Issue Description:</strong>{" "}
          {this.state.issue.issueDescription}
        </p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customize: state.customize,
    issues: state.issues.issues,
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(withRouter(IssueDetail))
);
