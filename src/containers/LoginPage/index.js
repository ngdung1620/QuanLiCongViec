import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant="caption" className={classes.text}>
                    Đăng Nhập
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <Link to="./admin" className={classes.link}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    className={classes.button}
                  >
                    Đăng Nhập
                  </Button>
                </Link>
                <div className={classes.footer}>
                  <Link to="/signup">Đăng Kí Tài Khoản Mới</Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
