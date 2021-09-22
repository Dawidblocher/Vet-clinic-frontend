import React from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter as Router} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Lato"', 'sans-serif'].join(',')
       }
})
const App = () => (
    <ThemeProvider theme={theme}>
    <Router>
       <Dashboard />
    </Router>
    </ThemeProvider>
    
)

export default App