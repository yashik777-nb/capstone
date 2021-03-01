import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import CustomizeFields from "./CustomizeFields";
import CardIssue from "../../components/Issue/CardIssue";
import IssuesChart from "../../containers/Charts/IssuesChart";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});
class AllIssues extends React.Component {
  render() {
    const { classes } = this.props;

    let issueCards = this.props.issues.map((issue) => {
      return (
        <CardIssue
          key={issue.id}
          {...issue}
          authenticated={this.props.authenticated}
        />
      );
    });

    return (
      <div className="m-4">
        {this.props.authenticated ? (
          <h4 style={{ marginTop: 20, textAlign: "center", color: "#3f51b5" }}>
            Hello {this.props.firstname}! Please find the below issues
          </h4>
        ) : null}
        <CustomizeFields />
        <div className={classes.root}>
          <Grid>{issueCards}</Grid>
        </div>
        <IssuesChart />
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
    authenticated: state.users.authenticated,
    firstname: state.users.firstname,
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(AllIssues)
);
