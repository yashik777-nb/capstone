import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import CustomizeFields from "./CustomizeFields";
import CardIssue from "../../components/Issue/CardIssue";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});
class AllIssues extends React.Component {
  render() {
    const { classes } = this.props;

    let issueCards = this.props.issues.map((issue) => {
      return <CardIssue key={issue.id} {...issue} />;
    });

    return (
      <div className="m-4">
        <CustomizeFields />
        <div className={classes.root}>
          <Grid>{issueCards}</Grid>
        </div>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(AllIssues)
);
