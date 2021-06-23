import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import styles from './styles'
import TaskItem from './../taskItem/index';
class TaskList extends Component {
  render() {
      var{ classes, tasks, status,onClickEdit,onClickDelete }= this.props;
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.container}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapListed}>
          {tasks.map((task, index) => {
            return (
              <TaskItem  task={task} status={status} key={index} onClickEdit={()=> onClickEdit(task)} onClickDelete={()=> onClickDelete(task)}/>
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
