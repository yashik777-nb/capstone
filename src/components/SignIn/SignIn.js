import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import CapstoneAPI from "../../data/CapstoneAPI";

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
      error: false,
      errorText: "",
    };
  }

  toRegister(e) {
    e.preventDefault();
    this.props.register();
  }

  onSubmit(e) {
    e.preventDefault();
    const userFound = CapstoneAPI.checkUser(this.state.username);
    if (userFound.length === 1) {
      this.props.onSave(userFound);
    } else {
      this.setState({
        ...this.state,
        errorText: "Username does not exist in database",
      });
    }
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

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              error={this.state.errorText.length === 0 ? false : true}
              helperText={this.state.errorText}
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container className={classes.register}>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={(e) => this.toRegister(e)}
                >
                  {"Don't have an account? Register"}
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
