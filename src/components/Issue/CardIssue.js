import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
    margin: 5,
    display: "inline-block",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  issueDescription: {
    wordWrap: `break-word`,
  },
});

class CardIssue extends React.Component {
  issueClicked(e) {
    if (this.props.authenticated) {
      if (window.confirm("Are you sure you want to view the details ?"))
        this.props.history.push(`/issues/${this.props.issueDescription}`);
    } else {
      if (window.confirm("Please Sign In/Register to View More Details"))
        this.props.history.push(`/signin`);
    }
    // if (window.confirm("Are you sure you want to view the details ?"))
    //   this.props.history.push(`/issues/${this.props.issueDescription}`);
    // this.props.history.push(`/signin`);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {this.props.title}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            className={classes.issueDescription}
          >
            {this.props.issueDescription}
          </Typography>
          {this.props.customize.severity ? (
            <Typography className={classes.pos} color="textSecondary">
              Severity: {this.props.severity}
            </Typography>
          ) : null}
          {this.props.customize.status ? (
            <Typography className={classes.pos} color="textSecondary">
              Status: {this.props.status}
            </Typography>
          ) : null}
          {this.props.customize.createdDate ? (
            <Typography variant="body2" component="p">
              Created Date: {this.props.createdDate}
            </Typography>
          ) : null}
          {this.props.customize.resolvedDate ? (
            <Typography variant="body2" component="p">
              Resolved Date: {this.props.resolvedDate}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => this.issueClicked(e)}>
            View Details
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(CardIssue));
