import React from "react";
import randomColor from "randomcolor";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
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

class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleErrorText: "",
      issueDescription: "",
      issueDescriptionErrorText: "",
      severity: "Major",
      status: "Open",
      createdDate: null,
      createdDateString: "",
      resolvedDate: null,
      resolvedDateString: "",
    };
  }

  titleChangeHandler(e) {
    this.setState({
      title: e.target.value,
      titleErrorText: "",
    });
  }

  issueDescriptionChangeHandler(e) {
    this.setState({
      issueDescription: e.target.value,
      issueDescriptionErrorText: "",
    });
  }

  severityChangeHandler(e) {
    this.setState({
      severity: e.target.value,
    });
  }

  statusChangeHandler(e) {
    this.setState({
      status: e.target.value,
    });
  }

  createdDateChangeHandler(e) {
    const stringDate =
      e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
    this.setState({
      createdDate: new Date(e),
      createdDateString: stringDate,
    });
  }

  resolvedDateChangeHandler(e) {
    const stringDate =
      e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
    this.setState({
      resolvedDate: new Date(e),
      resolvedDateString: stringDate,
    });
  }

  onAddIssue(event) {
    event.preventDefault();

    const color = randomColor();
    const colorOption = {
      count: 2,
      hue: color,
    };
    const newColor = randomColor(colorOption);

    let issue = {
      title: this.state.title,
      issueDescription: this.state.issueDescription,
      severity: this.state.severity,
      status: this.state.status,
      createdDate: this.state.createdDateString,
      resolvedDate: this.state.resolvedDateString,
      backGroundColor: newColor[0],
      hoverBackGroundColor: newColor[1],
      views: 1,
    };
    this.props.onSave(issue);
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
              variant="h5"
              style={{ color: "#3f51b5" }}
            >
              Add An Issue
            </Typography>
            <form className={classes.form} onSubmit={(e) => this.onAddIssue(e)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Title"
                label="Issue Title"
                name="Title"
                autoComplete="Title"
                autoFocus
                value={this.state.title}
                onChange={(e) => this.titleChangeHandler(e)}
                color="primary"
                error={this.state.titleErrorText.length === 0 ? false : true}
                helperText={this.state.titleErrorText}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="issueDescription"
                label="issueDescription"
                type="issueDescription"
                id="issueDescription"
                value={this.state.issueDescription}
                onChange={(e) => this.issueDescriptionChangeHandler(e)}
                error={
                  this.state.issueDescriptionErrorText.length === 0
                    ? false
                    : true
                }
                helperText={this.state.issueDescriptionErrorText}
              />
              <FormControl className={classes.formControl}>
                <InputLabel id="severityLabel">Severity</InputLabel>
                <Select
                  required={true}
                  labelId="severityLabel"
                  id="severity"
                  value={this.state.severity}
                  onChange={(e) => this.severityChangeHandler(e)}
                >
                  <MenuItem value={"Major"}>Major</MenuItem>
                  <MenuItem value={"Minor"}>Minor</MenuItem>
                  <MenuItem value={"Critical"}>Critical</MenuItem>
                </Select>
                <FormHelperText className={classes.helperText}>
                  Choose Severity
                </FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="statusLabel">Status</InputLabel>
                <Select
                  required={true}
                  labelId="statusLabel"
                  id="status"
                  value={this.state.status}
                  onChange={(e) => this.statusChangeHandler(e)}
                >
                  <MenuItem value={"Open"}>Open</MenuItem>
                  <MenuItem value={"In Progress"}>In Progress</MenuItem>
                  <MenuItem value={"Closed"}>Closed</MenuItem>
                </Select>
                <FormHelperText className={classes.helperText}>
                  Choose Status
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
                      onChange={(e) => this.createdDateChangeHandler(e)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <FormHelperText className={classes.helperText}>
                  Select Created Date
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
                      onChange={(e) => this.resolvedDateChangeHandler(e)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <FormHelperText className={classes.helperText}>
                  Select Resolved Date
                </FormHelperText>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Issue
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IssueForm);
