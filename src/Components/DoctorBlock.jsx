import React from 'react'
import { Grid, Paper, Avatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import  styled  from 'styled-components'

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
`

const StyledAvatar = styled(Avatar)`
    border: ${ props => props.status ? '4px solid #41b741' : '4px solid #b74141' };
    height: 250px !important;
        width: 250px !important;
    margin: 0 auto;
`

function createData(name, value) {
    return { name, value };
}

const DoctorBlock = ({xs, md, lg, avatarSrc, doctor}) => {   
    const rows = [
        createData('Cena za godzinę:', doctor.salaryForHour + 'zł/h'),
        createData('Nip:', doctor.nip),
        createData('Dostępność:', (doctor.status ? 'Dostępny' : "Niedostępny" ) ),
    ];

    return (
    <Grid item xs={xs} md={md} lg={lg}>
            <StyledPaper >
            <StyledAvatar alt="Cindy Baker" status={doctor.status} src={avatarSrc}/>                     
                    <TableContainer >
                    <Table aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Imię:</TableCell>
                            <TableCell align="left">{doctor.firstName} {doctor.lastName}</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.value}</TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>             
            </StyledPaper>
        </Grid>
)
}

export default DoctorBlock