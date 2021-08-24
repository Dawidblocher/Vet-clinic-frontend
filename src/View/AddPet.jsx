import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': { 
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const AddPet = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }; 
    return (

    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField id="outlined-search" label="Imię zwierzaka" type="text" variant="outlined" />
        <TextField id="outlined-search" label="Gatunek" type="text" variant="outlined" />
        <TextField id="outlined-search" label="Rasa" type="text" variant="outlined" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}><KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Data urodzenia"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /></MuiPickersUtilsProvider>
      </div>
    </form>
)
        }

export default AddPet