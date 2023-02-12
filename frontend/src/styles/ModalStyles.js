export const ModalStyles = {
  mainButton: {
    color: 'black', borderRadius: 2,
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', backgroundColor: 'rgba(315, 255, 255, 0.8)',
    marginTop: 15,
    '&:hover': {
      backgroundColor: 'rgb(0,0,0,0.7)',
      color: 'white'
    }
  },
  mainBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    // height: 500,
    bgcolor: 'rgb(0,0,0,0.2)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  },
  paperContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  titleContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '40px',
    fontFamily: 'Dancing Script'
  },
  gridContainer: {
    marginTop: '50px',
    width: '100%'
  },
  gridBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  submitButtin: {
    marginBottom: 2, color: 'white', marginTop: '20px', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', backgroundColor: 'rgb(180,0,0,0.4)', '&:hover': {
      backgroundColor: 'rgb(200,300,300,0.7)',
      color: 'black'
    }
  }
}