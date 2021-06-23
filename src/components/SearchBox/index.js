import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
class SearchBox extends Component {
  render() {
    const { classes, handleChange} = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          className={classes.textField}
          placeholder='Search...'
          onChange={handleChange}
        />
      </form>
    );
  }
}
SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func
};
export default withStyles(styles)(SearchBox);
