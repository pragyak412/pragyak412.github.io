import React from 'react';
import {MuiThemeProvider, Typography, ButtonBase, IconButton,  CssBaseline}from '@material-ui/core';
import { createMuiTheme, makeStyles} from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const theme = createMuiTheme({
  palette:{
    alignItems:'center',
  },
  typography: {
    h1:{
      marginTop:'3%',
      textAlign:'center',
      fontSize: '6vh',
      fontFamily: 'monospace',
      color: 'turquoise',
    },
    body2:{
      textAlign:'center',
      fontSize: '3vh',
      fontFamily: 'sans-serif',
      color: 'turquoise',
    }
  }
});
const useStyles = makeStyles((theme) => ({
  container: {
   
    left: '50%', 
    transform: 'translate(-50%)',
    padding:'1.5ls%'
  },
  img: {
    minWidth: '90%',
    minHeight: '90%',

  },
  icon:{
    color: 'beige',
  }
}));

export default function About(){
  const classes = useStyles()
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Typography variant="h1" className="Typography" >
            I'm Pragya Kumari
        </Typography>
        <ButtonBase className={classes.container} >
          <img src={require('./picture/profile.png')} alt="profile" className={classes.img} />
        </ButtonBase> 
        <Typography variant="body2" className="Typography" >
            I am a software developer at Adobe Systems. I completed my 
            graduation in Electronic and Communication Engineering
            from National Institute of Technology, Warangal. I like to solve 
            problems by means of programming and make things simpler.
        </Typography>
        <ButtonBase className={classes.container} >
        <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/pragya-kumari-911031148/')}>
          <LinkedInIcon fontSize="large" className={classes.icon} />
        </IconButton>
        <IconButton aria-label="gmail.com" onClick={() => window.open('mailto:pragyak412@gmail.com')}>
          <MailIcon fontSize="large" className={classes.icon} />
        </IconButton>
        <IconButton aria-label="github.com" onClick={() => window.open('https://github.com/pragyak412')}>
          <GitHubIcon fontSize="large" className={classes.icon} />
        </IconButton>
        <IconButton aria-label="facebook.com" onClick={() => window.open('https://www.facebook.com/pragya.kumari.5686')}>
          <FacebookIcon fontSize="large" className={classes.icon} />
        </IconButton>
        </ButtonBase> 
      </MuiThemeProvider>
      </React.Fragment>
    </div>
    );

}
