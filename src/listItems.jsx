import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import PetsIcon from '@material-ui/icons/Pets';

const StyledListItem = styled(ListItem)`
  
  &.MuiListItem-button{
    color: #fff;
    margin: 10px 0;
    border-radius: 30px 0 0 30px;
  }

  &.active{
    background: #fff;
    color: #338F6C;
    
  }
  &.MuiListItem-button:hover{
    background: #338F6C;
  }

  &.active.MuiListItem-button:hover{
    background: #fff;
  }

  &.active:after{
    content: '';
    display: block;
    position: absolute;
    right: -30px;
    width: 30px;
    height: 48px;
    background: #338F6C;
    border-radius: 0 30px 30px 0;
    top: -48px;
    z-index: 3;
  }
  &.active:before{
    content: '';
    display: block;
    position: absolute;
    right: -30px;
    width: 30px;
    height: 48px;
    background: #338F6C;
    border-radius: 0 30px 30px 0;
    bottom: -48px;
    z-index: 3;
  }

  
  &.active .MuiTouchRipple-root:before{
    content: '';
    right: -30px;
    background: #fff;
    height: 96px;
    display: block;
    width: 30px;
    top: -25px;
    z-index: 2;
    position: absolute;
  }

  & .MuiTouchRipple-root{
    overflow: inherit;
  }

  &.active .MuiListItemIcon-root{
    color: #338F6C;
  }

  & .MuiListItemIcon-root{
    color: #E2C992;
  }

  & .MuiTouchRipple-ripple{
    display: none;
  }
  & .MuiTouchRipple-root{
    
  }
  &.MuiListItem-button{
    transition: none;
  }
`

export const mainListItems = (
  <div>
    <StyledListItem button 
    key="Dashboard"
    component={NavLink} 
    to="/"
    exact
   >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </StyledListItem>
    <StyledListItem
      button 
      key="mypet"
      component={NavLink} 
      activeClassName='active'
      to="/mypets"
    >
      <ListItemIcon>
        <PetsIcon />  
      </ListItemIcon>
      <ListItemText primary="Moje zwierzaki" />
    </StyledListItem>
    <StyledListItem 
      button
      key="addpet"
      component={NavLink} 
      to="/addpet"
    >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Dodaj zwierzaka" />
    </StyledListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Wizyty</ListSubheader>
    <StyledListItem
    button
    key="addpet"
    component={NavLink} 
    to="/doctors"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Lekarze" />
    </StyledListItem>
    <StyledListItem
    button
    key="myvisits"
    component={NavLink} 
    to="/addvisits"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Umów wizytę" />
    </StyledListItem>
    <StyledListItem 
    button
    key="myvisits"
    component={NavLink} 
    to="/myvisits">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Moje wizyty" />
    </StyledListItem>
    <StyledListItem
    button
    key="myvisits"
    component={NavLink} 
    to="/myvisits">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Moje recepty" />
    </StyledListItem>
  </div>
);
