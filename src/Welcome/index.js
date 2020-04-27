import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography,MuiThemeProvider,Box, CssBaseline}from '@material-ui/core';
import About from '../About/index.js';
import Projects from '../Projects/index.js';
import Hobbies from '../Hobbies/index.js';
import TechSkills from '../TechSkills/index.js'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import ParticlesBg from "particles-bg";
import background from './background.jpg'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  

  root: {
      paddingTop: '5%',
      paddingBottom: '5%',
    },
    colorPrimary:{
      minWidth:'10%'
    }
  }));
  const theme = createMuiTheme({
      palette: {
        alignItems:'center',
          type: 'dark',
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              body: {
                backgroundImage:
                `url(${background})`
              }
            }
          }
        },
      
      typography: {
        
        button: {
          fontStyle: 'bold',
          fontWeight: 'bold',
          fontSize: '1.9vh',
          fontFamily: 'serif',

        },
      },
    });

export default function Welcome(props ) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles()
    
  
    return (
    <div >
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <ParticlesBg color="#ff0000" num={100} type="cobweb" bg={true} position="center" />
      <MuiThemeProvider theme={theme}>
      <React.Fragment>
      <CssBaseline />
       <Tabs value={value}  onChange={handleChange} aria-label="simple tabs example" className ={classes.colorPrimary} centered={true} >
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="Projects" {...a11yProps(1)} />
                <Tab label="Tech Skills" {...a11yProps(2)} />
                <Tab label="Hobbies" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <About/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Projects/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TechSkills/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Hobbies/>
            </TabPanel>
      </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
}
