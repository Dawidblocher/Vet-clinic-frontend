import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase';
export const mainListItems = (
  <div>
    <ListItem button 
    key="Dashboard"
    component={Link} 
    to="/"
   >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem 
      button 
      key="mypet"
      component={Link} 
      to="/"
    >
      <ListItemIcon>
        <ShoppingCartIcon />  
      </ListItemIcon>
      <ListItemText primary="Moje zwierzaki" />
    </ListItem>
    <ListItem 
      button
      key="addpet"
      component={Link} 
      to="/addpet"
    >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Dodaj zwierzaka" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Wizyty</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Wizyty" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Umów wizytę" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Znajdz Lekarza" />
    </ListItem>
  </div>
);