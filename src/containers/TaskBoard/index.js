import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { STATUSES } from "../../constants";
import * as taskActions from "./../../actions/task";
import TaskForm from "./../../components/taskForm/index";
import TaskList from "./../../components/taskList/index";
import styles from "./styles";
import SearchBox from "./../../components/SearchBox/index";
import * as modalActions from "./../../actions/modal";
import { Box } from "@material-ui/core";
class TaskBoard extends Component {
  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask();
  }
  showModalDeleteTasks = (task) => {
    const { modalActions, classes } = this.props;
    const { showModal, changeModalTitle, changeModalContent,hideModal } = modalActions;
    showModal();
    changeModalTitle("Xóa công việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn có chắc chắn muốn xóa <span>' {task.title} '</span> ?
        </div>
        <Box mt={2} display="flex" flexDirection="row-reverse">
          <Button color="primary" onClick={() => this.handleDeleteTask(task)}>Đồng ý</Button>
          <Button color="secondary" onClick={hideModal}>Hủy Bỏ</Button>
        </Box>
      </div>
    );
  };
  handleDeleteTask = (task) => {
    const {id} = task;
    const {deleteTask} = this.props.taskActions;
    deleteTask(id);
  };
  renderBoard() {
    let xhtml = null;
    const { listTasks } = this.props;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              status={status}
              tasks={taskFiltered}
              key={status.value}
              onClickEdit={this.onClickEdit}
              onClickDelete={this.showModalDeleteTasks}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  onClickEdit = (task) => {
    const { taskActions, modalActions } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActions;
    const { setTaskEditing } = taskActions;
    setTaskEditing(task);
    showModal();
    changeModalTitle("Cập nhật công việc");
    changeModalContent(<TaskForm />);
  };
  openForm = () => {
    const { modalActions } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActions;
    const { taskActions } = this.props;
    const { setTaskEditing } = taskActions;
    setTaskEditing(null);
    showModal();
    changeModalTitle("Thêm Mới Công Việc");
    changeModalContent(<TaskForm />);
  };
  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActions } = this.props;
    const { filterTask } = taskActions;
    filterTask(value);
  };
  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          size="medium"
          onClick={this.openForm}
        >
          Thêm công việc
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listTasks: state.task.listTasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
