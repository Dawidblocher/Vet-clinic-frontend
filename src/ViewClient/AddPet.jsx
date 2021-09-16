import React from 'react'
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import {Grid, Paper, Button, Typography
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useFormik } from 'formik';
import { connect } from 'react-redux'
import {addPet} from '../actions';
import  styled  from 'styled-components'

const StyledTypography = styled(Typography)`
  margin-bottom: 35px;
  text-align: center;
`

const StyledGrid = styled(Grid)`
  margin: 0 auto !important;
  justify-content: center;

`

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const StyledForm = styled.form`
 display: flex;
  flex-direction: column;
  padding: 10px;
`

const AddPet = ({ owner, addPet}) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
  const formik = useFormik({
    initialValues: {
      name: '',
      specs: '',
      breed: '',
      birthdate: selectedDate
    },
    onSubmit: (values) => {
    
      const pet = {
        name: values.name,
        specs: values.specs,
        breed: values.breed,
        birthDate: `${appendLeadingZeroes(selectedDate.getDate())}-${appendLeadingZeroes(selectedDate.getMonth() + 1)}-${selectedDate.getFullYear()}`,
        ownerId: owner.id
      }
      console.log(pet.birthDate)
      addPet(pet) 
    },
  });

  function appendLeadingZeroes(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }
  


  return (
    <StyledGrid item xs={12} md={6} lg={6} >
      <StyledTypography  variant="h4">Dodaj nowego zwierzaka</StyledTypography>
      <StyledPaper>         
        
        <StyledForm  onSubmit={formik.handleSubmit}>
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
              onChange={setSelectedDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            /></MuiPickersUtilsProvider> 
          <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
        </StyledForm>
      </StyledPaper>
    </StyledGrid>
    
  )
}

const mapDispatchToProps = dispatch => ({
  addPet: (pet) => dispatch(addPet(pet)),
})

const mapStateToProps = ({ owner }) => ({owner})

export default connect(mapStateToProps, mapDispatchToProps)(AddPet)