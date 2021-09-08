import React, { Component } from 'react'
import DoctorBlock from '../Components/DoctorBlock'
import { connect } from 'react-redux'
import { getDoctors } from '../actions'

class Doctors extends Component 
{
    componentDidMount(){
       this.props.getDoctors()
    }
   
    createDoctor = ({firstName, id, lastName, nip, sallaryForHour, status}) =>  ({firstName, id, lastName, nip, sallaryForHour, status})

    render() {
        let doctors = null
        if(this.props.doctors){
            doctors = this.props.doctors.map(doctor => (<DoctorBlock key={doctor.id} xs={12} md={6} lg={4} doctor={doctor}/>))
        }
         

        return(
            <>
                {doctors}
            </>
        )
    }
}

const mapDispatchToProps  = dispatch => ({
    getDoctors: () => dispatch(getDoctors())
})

const mapStateToProps = ({ doctors }) => ({ doctors})

export default connect(mapStateToProps, mapDispatchToProps)(Doctors)