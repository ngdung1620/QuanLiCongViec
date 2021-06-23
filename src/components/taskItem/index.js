import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
class TaskItem extends Component {
  render() {
    var { classes, task, status,onClickEdit,onClickDelete } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.btnAction}>
          <Fab color="primary" aria-label="edit" size="small" onClick={onClickEdit}>
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="primary" aria-label="delete" size="small" onClick={onClickDelete}>
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
