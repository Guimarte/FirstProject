import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import NavHeader from '../../components/NavHeader/index'
import MyCards from '../../components/MyCards/index'
import Footer from '../../components/Footer/index'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [{
id: '1',
image: 'https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_960_720.jpg',
title: 'Corrida',
description:'Corrida no Parque'
},
{
  id: '2',
  image: 'https://cdn.pixabay.com/photo/2020/02/01/16/42/jusang-joint-4810725_960_720.jpg',
  title: 'Lugares Lindos',
  description:'Montanha Maravilhosa'
  },
  {
    id: '3',
    image: 'https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_960_720.jpg',
    title: 'Vulcão',
    description:'Vulcão adormecido'
    },
    {
      id: '4',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/05/02/ashes-1867440_960_720.jpg',
      title: 'Vulcão',
      description:'Vulcão em erupção '
      }





];

 function App() {
  const classes = useStyles();

  return (
    <>
    <NavHeader />
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              First Project
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Esse é meu primeiro projeto, aprendi a criar array de objetos, components, props e muito mais.
            </Typography>
            <div className={classes.heroButtons}>
              
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
         <MyCards data={cards} />
        </Container>
      </main>
     
    </>
  );
}



export default App;