import { TextField, withStyles } from "@material-ui/core"
import styles from './styles';
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
export default withStyles(styles)(renderTextField);
