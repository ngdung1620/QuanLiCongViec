import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
class AdminHomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wraper}>
        <h1 className={classes.header}>Sản Phẩm Xếp Lịch Công Việc</h1>
      </div>
    );
  }
}

export default withStyles(styles)(AdminHomePage);
