import React from 'react';
import { Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from 'react';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

export default function Doctors() {
    const [doctors, setDoctors] = React.useState([]);

    useEffect(() => {
        console.log(doctors)
        axios.get(`http://localhost:8080/doctor`)
        .then(res => {
            const doctors = res.data.map(item => createDoctor(item.firstName, item.id, item.lastName, item.nip, item.sallaryForHour, item.status))
            setDoctors(res)
            return doctors;
        })
      }, [])
    
    const createDoctor = (firstName, id, lastName, nip, sallaryForHour, status) => {
        return {firstName, id, lastName, nip, sallaryForHour, status}
    }
  
  return (
    <React.Fragment>
      <Typography variant="h5" align='left' gutterBottom>Our Doctors</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>NIP</TableCell>
            <TableCell>Sallary for hour</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.nip}</TableCell>
              <TableCell>{row.sallaryForHour ? row.sallaryForHour : "Nie podano"}</TableCell>
              <TableCell align="right">{row.status ? "dostępny" : "niedostępny"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}
