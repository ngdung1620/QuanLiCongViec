import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "orange",
    secondary: "#00BCD4",
    error: "#e64a19",
    defaultTextColor: "#000000",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    broderRadius: 4,
    marginRight: 20,
  },
});
export default theme;
