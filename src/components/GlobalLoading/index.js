import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import styles from "./styles";
import iconLoading from "./../../assets/image/loading.gif";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "./../../actions/ui";
import { connect } from 'react-redux';
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={iconLoading} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
