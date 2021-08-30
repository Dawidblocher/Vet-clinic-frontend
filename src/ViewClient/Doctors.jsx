import React from 'react'
import DoctorBlock from '../Components/DoctorBlock'
import { useEffect } from 'react';
import axios from 'axios';

const Doctors = () => {
    const [doctors, setDoctors] = React.useState([]);

    useEffect(() => {
        console.log(doctors)
        axios.get(`http://localhost:8080/doctor`)
        .then(res => {
            const doctors = res.data.map(item => createDoctor(item.firstName, item.id, item.lastName, item.nip, item.salaryForHour, item.status))
            
            setDoctors(doctors)
            return doctors;
        })
    }, [])

    const createDoctor = (firstName, id, lastName, nip, sallaryForHour, status) => {
        return {firstName, id, lastName, nip, sallaryForHour, status}
    }
    

    return (
    <>
        {doctors.map(doctor => (<DoctorBlock key={doctor.id} xs={12} md={6} lg={4} doctor={doctor}/> ))}
    </>
)}

export default Doctors