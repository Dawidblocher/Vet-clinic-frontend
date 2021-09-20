import React from 'react';
import  styled  from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Home from './ViewClient/Home';
import AddPet from './ViewClient/AddPet';
import {  Route, Switch } from "react-router-dom";
import Sidebar from './Components/Sidebar'
import MyPets from './ViewClient/MyPets';
import Doctors from './ViewClient/Doctors';
import MyVisits from './ViewClient/MyVisits';
import { Provider } from 'react-redux'
import store from './store'
import AddVisits from './ViewClient/AddVisits/AddVisits';


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

const Root = styled.div`
  display: flex;
`
const AppBarSpacer = styled.div`
  min-height: 78px;
`

const MainStyled = styled.main`
  flex-grow: 1;
  height: 100vh;
  background: #338F6C;
  overflow: 'auto';

  & .MuiContainer-root{
    border-radius: 40px 0 0 0;
    background: #fff;
    height: calc(100% - 78px);
    max-width: 100%;
  }
`

const ComponentsStyled = styled(Container)`
  padding-top: 32px;
    padding-bottom: 32px;
`

export default function Dashboard() {
  return (
    <Provider store={store}>
    <Root>
      <CssBaseline />
      <Sidebar />
      <MainStyled>
        <AppBarSpacer />
        <ComponentsStyled maxWidth="lg" >
          <Grid container spacing={3}>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/mypets" component={MyPets} />
               <Route path="/addpet" component={AddPet} />
               <Route path="/doctors" component={Doctors} />
               <Route path="/myvisits" component={MyVisits } />
               <Route path="/addvisits" component={AddVisits } />
            </Switch>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </ComponentsStyled>
      </MainStyled>
    </Root>
    </Provider>
  );
}
