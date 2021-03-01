import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { blue } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import BugReportIcon from "@material-ui/icons/BugReport";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import * as actionCreators from "../../../store/actions/actionsIndex";

const styles = (theme) => ({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 10,
    backgroundColor: blue[400],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 2,
  },
  register: {
    marginTop: 5,
  },
  formControl: {
    margin: 3,
    minWidth: 300,
  },
  helperText: {
    textAlign: "center",
    color: "#4d59b5",
    fontWeight: "bold",
    fontSize: 20,
  },
});
class IssueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {},
      open: false,
      disableIssueDescription: true,
      disableSeverity: true,
      disableStatus: true,
      disableCreatedDate: true,
      disableResolvedDate: true,
      severity: "",
      status: "",
      createdDate: null,
      createdDateString: "",
      resolvedDate: null,
      resolvedDateString: "",
    };
  }
  componentDidMount() {
    const selectedIssue = this.props.issues.filter(
      (issue) =>
        issue.issueDescription === this.props.match.params.issueDescription
    );
    this.setState({ issue: selectedIssue[0] });
  }

  severityHandler(e) {
    this.setState({ severity: e.target.value });
  }

  statusHandler(e) {
    this.setState({ status: e.target.value });
  }

  createdDateHandler(e) {
    const stringDate =
      e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
    this.setState({
      createdDate: new Date(e),
      createdDateString: stringDate,
    });
  }

  resolvedDateHandler(e) {
    const stringDate =
      e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
    this.setState({
      resolvedDate: new Date(e),
      resolvedDateString: stringDate,
    });
  }

  onIssueUpdate(e) {
    e.preventDefault();
    const issue = {
      id: this.state.issue.id,
      title: this.state.issue.title,
      issueDescription: this.state.issue.issueDescription,
      severity: this.state.severity,
      status: this.state.status,
      createdDate: this.state.createdDateString,
      resolvedDate: this.state.resolvedDateString,
      views: this.state.issue.views + 1,
    };
    console.log("[IssueDetail]", issue);
    this.props.updateIssue(issue);
    this.props.history.push("/");
  }

  onIssueDelete(e) {
    e.preventDefault();
    this.props.deleteIssue(this.state.issue.id);
    this.props.history.push("/");
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: "10px" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <BugReportIcon fontSize="large" />
            </Avatar>
            <Typography
              component="h1"
              variant="h2"
              style={{ color: "#3f51b5" }}
            >
              {this.state.issue.title}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              style={{ color: "#4d59b5" }}
            >
              {this.state.issue.issueDescription}
            </Typography>
            <form
              className={classes.form}
              onSubmit={(e) => this.onIssueUpdate(e)}
            >
              <FormControl className={classes.formControl}>
                <InputLabel id="severityLabel">Severity</InputLabel>
                <Select
                  required={true}
                  labelId="severityLabel"
                  id="severity"
                  value={this.state.severity}
                  onChange={(e) => this.severityHandler(e)}
                >
                  <MenuItem value={"Major"}>Major</MenuItem>
                  <MenuItem value={"Minor"}>Minor</MenuItem>
                  <MenuItem value={"Critical"}>Critical</MenuItem>
                </Select>
                <FormHelperText className={classes.helperText}>
                  Previous Value: {this.state.issue.severity}
                </FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="severityLabel">Status</InputLabel>
                <Select
                  required={true}
                  labelId="statusLabel"
                  id="status"
                  value={this.state.status}
                  onChange={(e) => this.statusHandler(e)}
                >
                  <MenuItem value={"Open"}>Open</MenuItem>
                  <MenuItem value={"In Progress"}>In Progress</MenuItem>
                  <MenuItem value={"Closed"}>Closed</MenuItem>
                </Select>
                <FormHelperText className={classes.helperText}>
                  Previous Value: {this.state.issue.status}
                </FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      required={true}
                      margin="normal"
                      id="createdDate"
                      label="Created Date"
                      format="dd/MM/yyyy"
                      value={this.state.createdDate}
                      onChange={(e) => this.createdDateHandler(e)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <FormHelperText className={classes.helperText}>
                  Previous Value: {this.state.issue.createdDate}
                </FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      required={true}
                      margin="normal"
                      id="resolvedDate"
                      label="Resolved Date"
                      format="dd/MM/yyyy"
                      value={this.state.resolvedDate}
                      onChange={(e) => this.resolvedDateHandler(e)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <FormHelperText className={classes.helperText}>
                  Previous Value: {this.state.issue.resolvedDate}
                </FormHelperText>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Update Issue
              </Button>
            </form>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={(e) => this.onIssueDelete(e)}
            >
              Delete Issue
            </Button>
          </div>
        </Container>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateIssue: (issue) => dispatch(actionCreators.updateIssue(issue)),
    deleteIssue: (id) => dispatch(actionCreators.deleteIssue(id)),
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(IssueDetail))
);
