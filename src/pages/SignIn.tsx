import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    position: 'relative',
    backgroundColor: '#74cafe',
    display: 'flex',
    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '25%',
    top: '45%',
    transform: 'translate(-50%, -50%)',
    width: '150%',
    height: '150%',
  },
  blueSideListInfo: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  }
}))


function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide} >
        <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире.
              </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению.
              </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper} >
          <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
          <Typography variant='h4' className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button fullWidth variant='contained' color='primary' style={{ marginBottom: 20 }}>
            Зарегистрироваться
          </Button>
          <Button fullWidth variant='outlined' color='primary'>
            Войти
          </Button>
        </div>
      </section>
    </div>
  )
}

export default SignIn
