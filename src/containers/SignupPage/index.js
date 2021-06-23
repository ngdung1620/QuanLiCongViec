import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Button, Card, CardContent, TextField, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.singup}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant="caption" className={classes.text}>Đăng Kí</Typography>
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
                 <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                control={<Checkbox value= "agree" />}
                label="Tôi đã đọc chính sách và đồng ý điều khoản"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className={classes.button}
                >
                  Đăng Kí
                </Button>
                <div className={classes.footer}>
                  <Link to='/login'>Đã có tài khoản?</Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignupPage);
