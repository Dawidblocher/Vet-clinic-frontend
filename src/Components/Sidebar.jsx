import React from 'react'
import { Typography, Divider, List, AppBar, Toolbar, Badge} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer'; 
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../listItems';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import logo from '../assets/img/vet-logo.png'
import styled from 'styled-components'

const drawerWidth = 240;

const StyledLogo = styled.img`
  max-width: 120px;
  height: auto;
`

const StyledDrawer = styled(Drawer)`
    width: 300px;
    position: relative;
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    white-space: nowrap;

    & .MuiDrawer-paper{
      position: static;
      width: 100%;
      background: #338F6C;
      border-right: 0;
      padding: 30px;
    }
`

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 80px;
`

const StyledAppBar = styled(AppBar)`
    & .MuiToolbar-regular{
      top: 0;
    left: auto;
    right: 0;
    position: absolute;
    width: calc(100% - 300px);
    margin-left: 300px;
    background: #338F6C;
    padding: 15px 15px;
    }
    
`


const useStyles = makeStyles((theme) => ({ 
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
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
  }));

const Sidebar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (<>
        <StyledAppBar position="absolute" >
        <Toolbar className={classes.toolbar}> 
          
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </StyledAppBar>

        <StyledDrawer
            variant="permanent"
            
            open={open}
        >
            <StyledLogoWrapper >
               <StyledLogo src={logo} alt='logo'/>
            </StyledLogoWrapper>
            <Divider />
                <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </StyledDrawer>
    </>)
}

export default Sidebar