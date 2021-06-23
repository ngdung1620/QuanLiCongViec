import { Grid, MenuItem, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderSelectField from "../FormHelper/Select";
import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";
import renderTextField from "./../FormHelper/TextField/index";
import styles from "./styles";
const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Vui lòng nhập tên công việc";
  } else if (values.title.length > 20) {
    errors.title = "Tên công việc không vượt quá 20 kí tự";
  }
  if (!values.description) {
    errors.description = "Vui lòng nhập mô tả công việc";
  } else if (values.description.length > 30) {
    errors.description = "Tên công việc không vượt quá 30 kí tự";
  }
  return errors;
};
class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActions, taskEditing } = this.props;
    const { addTask, updateTask } = taskActions;
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };
  renderSelectField() {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          className={classes.select}
          name="status"
          component={renderSelectField}
          label="Trạng thái"
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }
  render() {
    const { classes, modalActions, handleSubmit, invalid, submiting } =
      this.props;
    const { hideModal } = modalActions;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="standard-basic"
              label="Tên Công Việc"
              className={classes.form}
              size="small"
              name="title"
              component={renderTextField}
            />
            <Field
              id="standard-multiline-flexible"
              label="Mô Tả Công Việc"
              multiline
              rowsMax={4}
              className={classes.form}
              size="small"
              name="description"
              component={renderTextField}
            />
            {this.renderSelectField()}
          </Grid>
          <Grid item md={12} className={classes.buttons}>
            <Button
              className={classes.button}
              color="primary"
              type="submit"
              disabled={invalid || submiting}
            >
              Lưu lại
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              onClick={hideModal}
            >
              Hủy Bỏ
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing
        ? state.task.taskEditing.description
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
    taskActions: bindActionCreators(taskActions, dispatch),
  };
};
const withReduxForm = reduxForm({
  form: "TASK_MANAGEMENT",
  validate,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
