import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Login.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 250,
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
  roott: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
}));

function Login() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
      <Paper elevation={24} >
     
        <div >
        <LockOpenIcon color="primary"/>
        <h1>Login</h1>
        <form className={classes.roott} noValidate autoComplete="off">
        <div>
        <TextField
          required
          id="filled-required"
          label="Email"
          defaultValue="Email"
          variant="filled"
        />
         <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        
        </div>
        <Button variant="contained" color="primary" href="#contained-buttons">
        Login
      </Button>
        </form>
        <Typography variant="subtitle2" display="block" gutterBottom>
        Don't have an account? Click here..
      </Typography>
        </div>
      </Paper>
    </div>
        </div>
    )
}

export default Login
