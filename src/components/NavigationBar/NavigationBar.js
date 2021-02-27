import * as React from "react";
import { NavLink } from "react-router-dom";
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

const navLinks = [
  { title: `About`, path: `/about`, toolTip: `About Application` },
  { title: `Issues`, path: `/issues`, toolTip: `Issues in the Applicaiton` },
  { title: `Sign In`, path: `/signin`, toolTip: `Sign In to Applciaiton` },
  { title: `Register`, path: `/register`, toolTip: `Register Yourself` },
];

const styles = (theme) => ({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
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

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
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
              </List>
            </Hidden>
            <Hidden mdUp>
              <MobileNavigationBar navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
