import React from 'react';
import { Typography,MuiThemeProvider, Grid,  CssBaseline, Card, CardContent, Paper, Link, GridListTile, GridList}from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
      alignItems:'center'
    },

    typography: {
        
        body1: {
            marginTop:'2%',
            textAlign:'center',
            fontSize: '2vh',
            fontFamily: 'auto',
            color: 'black',
            
          },
          body2: {
            marginTop:'3%',
            textAlign:'center',
            fontSize: '2.5vh',
            fontFamily: 'auto',
            color: 'white',
            
          },
          subtitle1:{
            fontWeight: 'bold',
            textAlign:'center',
            fontSize: '2vh',
            fontFamily: 'auto',
            color: 'brown',
        }
      },
});
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '2%',
        borderradius: 0,
       '& > *': {
         padding: '2%',
         scrollbehavior: 'auto',
         borderradius: 0
      },
     },
    Paper:{
        backgroundColor:  '#DEE4E7',
    },
    Card: {
        backgroundColor: 'transparent',
        border:'transparent',
        margin: 'auto',
      },
      
    Grid:{
        alignContent: 'center',

    }

  }));
export default function TechSkills(){
    const classes = useStyles();
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <React.Fragment>
          <CssBaseline />
            <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
            <Paper className={classes.Paper}>

                    <Typography variant="subtitle1">
                        Programming 
                        Languages
                     </Typography>
                     <GridList cellHeight={'60%'}  cols={3}>
                    <GridListTile>
                    <Typography variant="body1">
                        <li>C++</li>
                        <li>Java</li>
                    </Typography>
                    </GridListTile>
                    <GridListTile>
                    <Typography variant="body1">
                        <li>Python</li>
                        <li>SQL</li>
                        </Typography>
                    </GridListTile>
                    <GridListTile> 
                    <Typography variant="body1">
                       <li>Java Script</li>
                        <li>Node.js</li>
                    </Typography>
                    </GridListTile>
                    </GridList>
    
                    <Typography variant="subtitle1">
                        Frameworks and Softwares
                    </Typography>
                    <GridList cellHeight={'60%'}  cols={3}>
                    <GridListTile>
                    <Typography variant="body1">
                        <li>React</li>
                        <li>Ansible</li>
                    </Typography>
                    </GridListTile>
                    <GridListTile>
                    <Typography variant="body1">
                        <li>SpringBoot</li>
                        <li>Salt Stack</li>
                        </Typography>
                    </GridListTile>
                    <GridListTile> 
                    <Typography variant="body1">
                        <li>Android Studio</li>
                    </Typography>
                    </GridListTile>
                    </GridList>
                    <Typography variant="subtitle1">
                        Graphics
                    </Typography>
                    <GridList cellHeight={'60%'}  cols={3}>
                    <GridListTile>
                    <Typography variant="body1">
                        <li>HTML</li>
                    </Typography>
                    </GridListTile>
                    <GridListTile>
                    <Typography variant="body1">
                        <li>CSS</li>
                        </Typography>
                    </GridListTile>
                    <GridListTile> 
                    <Typography variant="body1">
                        <li>Photoshop</li>
                    </Typography>
                    </GridListTile>
                    </GridList>
                    
                </Paper> 
                <Typography variant="body2">
                    To view Resume,
                <Link href="#" onClick={() => window.open('https://drive.google.com/file/d/1VcWG7EK3I1JWT3nO3JD6fuYEwwn3XfMB/view?usp=sharing')}>
                 click here
                </Link>
                </Typography>
            </div>
            
            </MuiThemeProvider>
            </React.Fragment>
        </div>
    );
}