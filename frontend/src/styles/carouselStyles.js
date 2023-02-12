export const carouselStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '40rem',
    // border: '2px solid purple',
    backgroundColor: 'transparent',
    marginTop: '5%',
  },
  leftCLick: {
    flex: '5%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    borderRadius: '10px 0 0 10px',
    display: 'grid',
    placeItems: 'center',
    color: 'rgb(134, 171, 151)',
    cursor: 'pointer',
  },
  centerTitle: {
    flex: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    fontFamily: 'Roboto',

  },
  rightClick: {
    flex: '5%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    borderRadius: '0 10px 10px 0',
    display: 'grid',
    placeItems: 'center',
    color: 'rgb(134, 171, 151)',
    cursor: 'pointer',
  },
  arrows: {
    fontSize: 35,
  },
  imgTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  imgTitle: {
    fontSize: '31px',
    fontWeight: 'bold'
  },

}