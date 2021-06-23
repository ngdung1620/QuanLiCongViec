import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Header from "./header/index";
import Sidebar from "./sidebar/index";
import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as uiActions from './../../actions/ui';
import cn from 'classnames';
class DashBoard extends Component {
  handleToggleSidebar = (value) => {
    const {showSidebar, hideSidebar} = this.props.uiActions;
    if(value===true) {
      showSidebar();
    }else {
      hideSidebar();
    }
  }
  render() {
    const { children, classes, name, showSidebar, history } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} showSidebar={showSidebar} onToggleSidebar={this.handleToggleSidebar} history={history}/>
        <div className={classes.wrapper}>
          <Sidebar showSidebar={showSidebar} onToggleSidebar={this.handleToggleSidebar}/>
          <div className={cn(classes.wrapperContent,{
            [classes.shiftLeft]: showSidebar === false
          })}>{children}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles)
)(DashBoard);
