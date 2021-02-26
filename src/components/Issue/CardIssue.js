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
    if (window.confirm("Are you sure you want to view the details ?"))
      this.props.history.push(`/issues/${this.props.issueDescription}`);
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
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => this.issueClicked()}>
            View Details
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(CardIssue));
