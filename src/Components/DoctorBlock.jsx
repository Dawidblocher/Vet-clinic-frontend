import React from 'react'
import { Grid, Paper, Avatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
     
    },
    fixedHeight: {
      height: "auto",
    },
    large: {    
        height: 250,
        width: 250,
        margin: '0 auto',
        marginBottom: '20px'
    },
    table: {
        
    },
    active: {
        border: '4px solid #41b741',

    },
    disable: {
        background: '4px solid #b74141',
    }
}));

function createData(name, value) {
    return { name, value };
}

const DoctorBlock = ({xs, md, lg, avatarSrc, doctor}) => {
    const classes = useStyles(doctor.status);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    const rows = [
        createData('Cena za godzinę:', doctor.salaryForHour + 'zł/h'),
        createData('Nip:', doctor.nip),
        createData('Dostępność:', (doctor.status ? 'Dostępny' : "Niedostępny" ) ),
        
      ];
    return (
    <Grid item xs={xs} md={md} lg={lg}>
            <Paper className={fixedHeightPaper}>
            <Avatar alt="Cindy Baker" src={avatarSrc} className={ clsx(classes.large, (doctor.status ? classes.active : classes.disable))}/>                     
                    <TableContainer >
                    <Table className={classes.table} aria-label="caption table">
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
            </Paper>
        </Grid>
)
}

export default DoctorBlock