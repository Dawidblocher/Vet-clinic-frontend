import React from 'react'
import { Typography, Grid, Paper, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import avatarSrc from '../assets/img/avatar.png'
import imgPet from '../assets/img/dog.jpg'
import PetBlock from '../Components/PetBlock'


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: '',
    },
    fixedHeight: {
      height: 180,
    },
    large: {
        width: 140,
        height: 140,
      },
      avatarInfoBlock:{
          paddingLeft: 35,
          flexGrow: "1",
          display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      },
  }));
  
const dog = {
    name: "Spencer",
    specs:  'Pies',
    breed: "Bernardyn",
    birthdate: '2017-05-04',
    owner: 'Adam Nowak'
}

const Home = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <>  
            <Grid item xs={12} md={2} lg={2}>
                <Paper className={fixedHeightPaper}>
                    <Avatar alt="Cindy Baker" src={avatarSrc} className={classes.large}/>                   
                </Paper>
            </Grid>
            <Grid item xs={12} md={10} lg={10}>
                <Paper className={clsx(classes.paper, classes.fixedHeight, classes.avatarInfoBlock)}>                  
                        <Typography variant='h4'>Adam Nowak</Typography>
                        <Typography variant='p'>E-mail: adamnowak@gmail.com</Typography>
                        <Typography variant='p'>Ilość zwierzaków: 3</Typography>                   
                </Paper>
            </Grid>
            
            <PetBlock xs={12} md={12} lg={12} imgPet={imgPet} dog={dog}/>
            
        </>
    )
}

export default Home;