const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 99,
    height: "100%",
    minHeight: "100vh",
    position: "relative",
  },
  menuLink: {
    textDecoration: "none",
    color: theme.color.defaultTextColor,
  },
  menuActive: {
    "&>div": {
      borderBottom: `2px solid ${theme.color.primary}`,
    },
  },
});
export default styles;
