import React from "react";
import { connect } from "react-redux";
import { Container, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import CustomizeFields from "./CustomizeFields";
import CardIssue from "../../components/Issue/CardIssue";
import IssuesChart from "../../containers/Charts/IssuesChart";
import Search from "../../containers/NavigationBar/Search";
import * as actionCreators from "../../store/actions/actionsIndex";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});
class AllIssues extends React.Component {
  render() {
    const { classes } = this.props;
    const issuesLength = this.props.issues.length;
    let issueCards = this.props.issues.map((issue) => {
      return (
        <CardIssue
          key={issue.id}
          {...issue}
          authenticated={this.props.authenticated}
          customize={this.props.customize}
        />
      );
    });

    return (
      <div className="m-4">
        <Container maxWidth="lg">
          {this.props.authenticated ? (
            <h4
              style={{ marginTop: 20, textAlign: "center", color: "#3f51b5" }}
            >
              Hello {this.props.firstname}! Please find the below issues
            </h4>
          ) : null}
          <Hidden mdUp>
            <div style={{ backgroundColor: "#3f51b5" }}>
              <Search filterFunction={this.props.onSearchIssue} />
            </div>
          </Hidden>
          {issuesLength > 0 ? (
            <div>
              <CustomizeFields />
              <div className={classes.root}>
                <Grid>{issueCards}</Grid>
              </div>
              <IssuesChart />
            </div>
          ) : (
            <h5 style={{ marginTop: 20, textAlign: "center", color: "red" }}>
              No Data Found
            </h5>
          )}
        </Container>
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
    customize: state.customize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchIssue: (value) => dispatch(actionCreators.filterIssues(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AllIssues));
