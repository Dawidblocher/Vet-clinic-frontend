import React from 'react'
import { Typography, Grid, Paper, Avatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: '',
    },
    fixedHeight: {
      height: "auto",
    },
    large: {    
        height: 250,
        width: 250
    },
    table: {
        minWidth: 650,
    },
}));

function createData(name, value) {
    return { name, value };
}



const PetBlock = ({xs, md, lg, imgPet, dog}) => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const rows = [
        createData('Gatuek:', dog.specs),
        createData('Rasa:', dog.breed),
        createData('Data urodzenia:', dog.birthdate),
        createData('Imię właściciela:', dog.owner),
      ];
    return (
        <Grid item xs={xs} md={md} lg={lg}>
            <Paper className={fixedHeightPaper}>
            <Avatar alt="Cindy Baker" src={imgPet} className={classes.large}/>                     
                    {/* <Typography variant='h4'>Imie: Spencer</Typography>
                    <Typography variant='p'>Gatunek: Pies</Typography>
                    <Typography variant='p'>rasa: Bernardyn</Typography> 
                    <Typography variant='p'>Data urodzenia: 2017-05-04</Typography>
                    <Typography variant='p'>Imię właściciela: Adam Nowak</Typography>     */}
                    <TableContainer >
                    <Table className={classes.table} aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Imię:</TableCell>
                            <TableCell align="left">{dog.name}</TableCell>
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

export default PetBlock