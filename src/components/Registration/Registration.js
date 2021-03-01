import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HowToRegOutlinedIcon from "@material-ui/icons/HowToRegOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

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
});

class SignInMUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      location: "",
      mobileNumber: "",
      userNameErrorText: "",
      passwordErrorText: "",
    };
  }

  toSignIn(e) {
    e.preventDefault();
    this.props.signIn();
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.username.includes("@")) {
      this.setState({
        ...this.state,
        userNameErrorText: "User Name is not an email",
      });
    } else if (!this.state.password.length < 3) {
      this.setState({
        ...this.state,
        passwordErrorText: "Password is short",
      });
    }
    setTimeout(() => {
      this.setState({
        ...this.state,
        userNameErrorText: "",
        passwordErrorText: "",
      });
    }, 2000);
    const user = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      location: this.state.location,
      mobileNumber: this.state.mobileNumber,
    };
    this.props.onSave(user);
  }

  usernameChangeHandler(e) {
    this.setState({
      username: e.target.value,
    });
  }

  passwordChangeHandler(e) {
    this.setState({
      password: e.target.value,
    });
  }

  firstNameChangeHandler(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  lastNameChangeHandler(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  locationChangeHandler(e) {
    this.setState({
      location: e.target.value,
    });
  }

  mobileNumberChangeHandler(e) {
    this.setState({
      mobileNumber: e.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <HowToRegOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={(e) => this.onSubmit(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.username}
              onChange={(e) => this.usernameChangeHandler(e)}
              color="primary"
              error={this.state.userNameErrorText.length === 0 ? false : true}
              helperText={this.state.userNameErrorText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={(e) => this.passwordChangeHandler(e)}
              error={this.state.passwordErrorText.length === 0 ? false : true}
              helperText={this.state.passwordErrorText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="First Name"
              type="firstname"
              id="firstname"
              autoComplete="firstname"
              value={this.state.firstname}
              onChange={(e) => this.firstNameChangeHandler(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="lastname"
              label="Last Name"
              type="lastname"
              id="lastname"
              autoComplete="lastname"
              value={this.state.lastname}
              onChange={(e) => this.lastNameChangeHandler(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="location"
              label="Location"
              type="location"
              id="location"
              autoComplete="location"
              value={this.state.location}
              onChange={(e) => this.locationChangeHandler(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="mobileNumber"
              label="Mobile Number"
              type="mobileNumber"
              id="mobileNumber"
              autoComplete="mobileNumber"
              value={this.state.mobileNumber}
              onChange={(e) => this.mobileNumberChangeHandler(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container className={classes.register}>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={(e) => this.toSignIn(e)}
                >
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              My Work
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignInMUI);
