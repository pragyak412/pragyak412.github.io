import React from 'react';
import { Typography,MuiThemeProvider, Paper, GridList, GridListTile, CardMedia,  CssBaseline}from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import data from './data.json';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    Paper:{
        backgroundColor: 'transparent',
        display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'space-around',
        overflow: 'hidden',
    },
    Card: {
        
        margin: 'auto'
      },
      Media: {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
      },
      gridList:{
          marginTop:'5%'
      }
    
}));
const theme = createMuiTheme({
    
    palette:{
      alignItems:'center',
    },
    typography: {
        h1:{
            textAlign:'center',
            fontSize: '3vh',
            fontFamily: 'monospace',
            color: 'aquamarine',
            fontWeight: 'bold',
            padding: '3%'
          },
        
      },
});
export default function Hobbies(){
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:50em)')
    var sketch = data.sketch.map(function(sketch,i){
        return(
            <div>
               <GridListTile>
                <CardMedia
                component="img"
                image={require(`${sketch.photo}`)}
                />
                </GridListTile>
              
            </div>
        );
    });
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <React.Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
           
            <div className={classes.root}>
                <div className={classes.Paper}>
                <Typography variant='h1'>
                        Sketching and Painting
                        <GridList cellHeight={'10vh'} className={classes.gridList} cols={matches ? 3:2}>
                            {sketch }
                        </GridList>
                    </Typography>
                </div>
            </div>
            </MuiThemeProvider>
            </React.Fragment>
        </div>
    );
}