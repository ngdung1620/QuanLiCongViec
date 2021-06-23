import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ADMIN_ROUTER } from "./../../../constants/index";
import { NavLink } from "react-router-dom";
class SideBar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };
  renderList() {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = (
      <List component="div">
        {ADMIN_ROUTER.map((item) => {
          return (
            <NavLink
              to={item.path}
              exact={item.exact}
              className={classes.menuLink}
              activeClassName={classes.menuActive}
              key={item.path}
            >
              <ListItem className={classes.menuItem} button>
                {item.name}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    );
    return xhtml;
  }
  render() {
    const { classes,showSidebar } = this.props;
    return (
      <Drawer
        open = {showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);
