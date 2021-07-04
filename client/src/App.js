import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid,Toolbar,IconButton,Button } from '@material-ui/core';
import Patient from './components/showPatient/showPatient.js';
import Create from './components/createPatient/createPatient.js';
import Update from './components/updatePatient/updatePatient.js';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">





    <Container maxWidth = "lg">
      <AppBar className = {classes.appBar} position="static" color="inherit">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h4" className={classes.title}>
        PATIENT RECORDS
      </Typography>
      </Toolbar>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" >
            <Grid item xs={10} sm={7}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Patient />
              </AppBar>
              <AppBar className={classes.appBar} position="relative"  color="inherit">
                <Update />
              </AppBar>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Create />
              </AppBar>

            </Grid>
            <Grid item xs={12} sm={8}>

            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </div>
  );
}

export default App;
