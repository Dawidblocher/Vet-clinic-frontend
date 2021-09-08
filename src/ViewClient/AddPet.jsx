import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import 'date-fns';
import {Grid, Paper, Button} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useFormik } from 'formik';
import { connect } from 'react-redux'
import {addPet} from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': { 
        margin: theme.spacing(1),
        width: 'calc(100% - 15px)',
      },
      display: 'flex',
      flexDirection: 'column'
    },
    gridCenter: {
      margin: '0 auto'
    },
    paperColumn: {
      display: 'flex',
      flexDirection: 'column'
    }
}));

const AddPet = ({ owner, addPet}) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }; 
  
  const formik = useFormik({
    initialValues: {
      name: '',
      specs: '',
      breed: '',
      birthdate: selectedDate
    },
    onSubmit: (values) => {
      const pet = {
        id: 2,
        name: values.name,
        specs: values.specs,
        breed: values.breed,
        birthdate: values.birthdate.toISOString().substring(0, 10),
        ownerId: owner.id
      }
      addPet(pet)
      alert(JSON.stringify(pet, null, 2));
    },
  });

  return (
    <Grid className={classes.gridCenter} item xs={12} md={6} lg={6} >
      <Paper className={classes.paperColumn}>         
        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <TextField id="name" name="name" label="Imię zwierzaka" type="text" variant="outlined" value={formik.values.name} onChange={formik.handleChange}/>
            <TextField id="specs" name="specs" label="Gatunek" type="text" variant="outlined" onChange={formik.handleChange}/>
            <TextField id="breed" name="breed" label="Rasa" type="text" variant="outlined" onChange={formik.handleChange} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}><KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="birthdate"
              name="birthdate"
              label="Data urodzenia"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            /></MuiPickersUtilsProvider> 
          <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
        </form>
      </Paper>
    </Grid>
    
  )
}

const mapDispatchToProps = dispatch => ({
  addPet: (pet) => dispatch(addPet(pet)),
})

const mapStateToProps = ({ owner }) => ({owner})

export default connect(mapStateToProps, mapDispatchToProps)(AddPet)