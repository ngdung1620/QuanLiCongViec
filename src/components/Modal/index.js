import React, { Component } from "react";
import { Modal, withStyles } from "@material-ui/core";
import { bindActionCreators, compose } from "redux";
import styles from "./styles";
import * as modalActions from "./../../actions/modal";
import { connect } from "react-redux";
class CommonModal extends Component {
  render() {
    var { open, classes, title, component } = this.props;
    const { modalActions } = this.props;
    const { hideModal } = modalActions;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <h1 className={classes.title}>{title}</h1>
          {component}
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(CommonModal);
