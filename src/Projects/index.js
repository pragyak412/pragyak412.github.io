import React from 'react';
import {  Typography,MuiThemeProvider, Paper, GridList,GridListTile, ButtonBase,Link, IconButton,  CssBaseline,Card, CardMedia , CardContent} from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import data from './data.json';
import GitHubIcon from '@material-ui/icons/GitHub';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const theme = createMuiTheme({
    palette:{
      alignItems:'center'
    },
    
    typography: {
        
        body1: {
            marginTop:'3%',
            textAlign:'justify',
            fontSize: '1.5vh',
            fontFamily: 'auto',
            color: 'black',
            
          },
          body2: {
            marginTop:'3%',
            textAlign:'justify',
            fontSize: '1.5vh',
            fontFamily: 'auto',
            color: '#0000CC',
            
          },
        h1:{
            textAlign:'center',
            fontSize: '3vh',
            fontFamily: 'monospace',
            color: 'aquamarine',
            fontWeight: 'bold',
            padding: '3%'
          },
        subtitle1:{
            fontWeight: 'bold',
            textAlign:'left',
            fontSize: '2vh',
            fontFamily: 'auto',
            color: 'brown',
        }
      },
});
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: '2%',
        borderradius: 0,
       '& > *': {
         padding: '5%',
         scrollbehavior: 'auto',
         borderradius: 0
      },
    },
    image: {
        width: '90%',
        height: '90%',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    Paper:{
        backgroundColor: 'transparent',
    },
    Grid:{
        marginTop:'3%',
    },
    icon:{
        color: '#0000CC'
      },
    Card: {
    backgroundColor: '#DEE4E7',
    height:'100%',
    marginTop:'2%',
    padding:'2%'
    },
    Media: {
        objectFit: 'contain',
        borderradius:'100%',
    },
    gridList:{
        cols: 2,
    },
    content: {
        objectFit: 'contain',
        
    }
  
  }));
export default function Projects(){
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:50em)')
    var projects = data.Projects.map(function(project, i){
        return(
            <div>
            
            <GridListTile>
            <Card className={classes.Card} variant='elevation'>
             <CardMedia
              className={classes.Media}
            component="img"
                image={require(`${project.photo}`)}/>

       
            <CardContent className={classes.content}>
                <Typography variant="subtitle1">
                    {project.title}
                    </Typography>
                    <Typography variant="body1">
                        {project.description}
                    </Typography>
                    </CardContent>
            </Card>
            </GridListTile>   
            </div>
        );
    })
    var publication = data.Publication.map(function(publication, i){
        return(
            <div>
                <Card className={classes.Card} variant='elevation'> 
                    <CardMedia
                        className={classes.Media}
                        component="img"
                         image={require(`${publication.photo}`)}/>
                    <CardContent>
                        <Typography variant="subtitle1">
                        {publication.title}
                        </Typography>
                        <Typography variant="body1">
                         {publication.description}
                        </Typography>
                        
                           { console.log(publication.link)}
                        <Link href="#" onClick={() => window.open(`${publication.link}`)}>
                        <Typography variant="body2">
                        {publication.linkname}
                        </Typography>
                        </Link>
                        <IconButton  aria-label="github.com" onClick={() => window.open(`${publication.github}`)}>
                        <GitHubIcon alignItems='left' fontSize="small" className={classes.icon} />
                        </IconButton>
                    </CardContent>
                </Card>
            </div>
        );
    })
    var otherpro = data.Others.map(function(other){
        return(
            <div>
                
                <Typography variant="body2">
                    <li style={{color: 'bisque',fontSize: '2vh',}}>{other.title}</li>
                    <Typography variant="body2" style={{color: 'white'}}>
                    {other.description}
                    </Typography>
                </Typography>
            </div>
        );
    })
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <React.Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper className={classes.Paper}>
                    <Typography variant='h1'>
                        Publication
                        {publication}
                    </Typography>
                    <Typography variant='h1'>
                        Projects
                        <GridList cellHeight={'100%'} cols={matches ? 2:1}>
                        {projects}
                        </GridList>
                    </Typography>
                    <Typography variant='h1'>
                        Other Projects
                        {otherpro}
                    </Typography>
                </Paper>
            </div>
            </MuiThemeProvider>
            </React.Fragment>
        </div>
    );
}