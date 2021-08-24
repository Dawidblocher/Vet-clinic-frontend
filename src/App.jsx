import React from 'react'
import { Typography } from '@material-ui/core'

import Dashboard from './Dashboard'
import { BrowserRouter as Router} from "react-router-dom";
const App = () => (
    <Router>
       <Dashboard />
    </Router>
)

export default App