import React from "react";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

class MobileNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
    };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    this.setState({ [anchor]: open });
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={() => this.toggleDrawer("right", true)}
        >
          <Menu />
        </IconButton>
      </React.Fragment>
    );
  }
}

export default MobileNavigationBar;
