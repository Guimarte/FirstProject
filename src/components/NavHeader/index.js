import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Homeicon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    }
}))

const NavHeader = ()=>{
const classes = useStyles();
return(
<AppBar position="relative">
        <Toolbar>
          <Homeicon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
           First Project
          </Typography>
        </Toolbar>
      </AppBar>


)
}

export default NavHeader