const styles = ()=>({
  background: {
    backgroundColor: '#03a9f4',
    padding: "40px",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    flex: '1 0 auto',
  },
  text : {
    fontSize: 30
  },
  button: {
    marginTop: 10
  },
  footer: {
    marginTop: 20,
    '&>a': {
      textDecoration: 'none',
      padding: 10,
      borderRadius: 6,
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    },
  },
  link: {
    textDecoration: 'none'
  }
})
export default styles;
