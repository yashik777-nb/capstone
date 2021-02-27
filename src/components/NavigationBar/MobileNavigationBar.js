import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Menu } from "@material-ui/icons";

const styles = (theme) => ({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

class MobileNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
    };
  }

  toggleDrawer = (anchor, open) => {
    this.setState({ [anchor]: open });
  };

  sideDrawerList = (anchor) => (
    <div
      className={this.props.list}
      role="presentation"
      onClick={() => this.toggleDrawer(anchor, false)}
      onKeyDown={() => this.toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {this.props.navLinks.map(({ title, path }) => (
          <NavLink to={path} key={title} className={this.props.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={() => this.toggleDrawer("right", true)}
        >
          <Menu fontSize="large" style={{ color: `white` }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={() => this.toggleDrawer("right", false)}
        >
          {this.sideDrawerList("right")}
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MobileNavigationBar);
