const styles = (theme) =>({
  wrapper: {
    display: 'flex',
  },
  wrapperContent: {
    width: '100%',
    padding: 10,
    transition: theme.transitions.create('margin',{
      easing:theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreens,
    }),
  },
  shiftLeft : {
    marginLeft: -240,
    transition: theme.transitions.create('margin',{
      easing:theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreens,
    }),
  }
});
export default styles;
