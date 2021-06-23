const styles = (theme) => ({
  form: {
    width: "100%",
    marginBottom: 16,
  },
  modal: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "400px",
    padding: theme.spacing(2, 4, 3),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "16px",
  },
  button: {
    padding: "5px 10px",
    marginRight: "6px",
  },
});
export default styles;
