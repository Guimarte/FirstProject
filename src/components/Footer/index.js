import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
   
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));




const Footer = () =>{

    const classes = useStyles();
return(
<footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    First Project - Learning ReactJS       
 </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          First Project
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </footer>
)
}

export default Footer