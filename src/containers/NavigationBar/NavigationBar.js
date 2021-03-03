import * as React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
import MobileNavigationBar from "./MobileNavigationBar";
import Search from "./Search";
import * as actionCreators from "../../store/actions/actionsIndex";

const navLinks = [
  { title: `About`, path: `/about`, toolTip: `About Application` },
  { title: `Issues`, path: `/issues`, toolTip: `Issues in the Applicaiton` },
  { title: `SignIn`, path: `/signin`, toolTip: `Sign In to Applciaiton` },
  { title: `Register`, path: `/register`, toolTip: `Register Yourself` },
];

const styles = (theme) => ({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    margin: 0,
    padding: 0,
    color: `white`,
    "&:hover": {
      color: "black",
      fontWeight: "bold",
      textDecoration: `none`,
    },
  },
  capStoneText: {
    textDecoration: `none`,
    color: `white`,
    "&:hover": {
      color: "black",
      textDecoration: `none`,
    },
  },
  homeButton: {
    "&:hover": {
      color: "black",
      anchor: "open",
    },
  },
});

export class NavigationBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <Tooltip disableFocusListener title="Home">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="home"
                className={classes.homeButton}
              >
                <Home fontSize="large" />
                <NavLink className={classes.capStoneText} to="/">
                  CapStone
                </NavLink>
              </IconButton>
            </Tooltip>
            <Search filterFunction={this.props.onSearchIssue} />
            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path, toolTip }) => (
                  <NavLink to={path} key={title} className={classes.linkText}>
                    <Tooltip disableFocusListener title={toolTip}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Tooltip>
                  </NavLink>
                ))}
                {this.props.authenticated ? (
                  <NavLink
                    to="/addissue"
                    key="Add Issue"
                    className={classes.linkText}
                  >
                    <Tooltip disableFocusListener title="Add An Issue">
                      <ListItem button>
                        <ListItemText primary="Add Issue" />
                      </ListItem>
                    </Tooltip>
                  </NavLink>
                ) : null}
                {this.props.authenticated ? (
                  <NavLink
                    to="/"
                    key="Logout"
                    className={classes.linkText}
                    onClick={(e) => this.props.logoutUser()}
                  >
                    <Tooltip
                      disableFocusListener
                      title="Logout from Application"
                    >
                      <ListItem button>
                        <ListItemText primary="Logout" />
                      </ListItem>
                    </Tooltip>
                  </NavLink>
                ) : null}
              </List>
            </Hidden>
            <Hidden mdUp>
              <MobileNavigationBar
                authenticated={this.props.authenticated}
                navLinks={navLinks}
                logout={this.props.logoutUser}
              />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    authenticated: state.users.authenticated,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onSearchIssue: (value) => dispatch(actionCreators.filterIssues(value)),
    logoutUser: () => dispatch(actionCreators.logoutUser()),
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispathToProps)(NavigationBar)
);
