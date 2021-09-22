import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import avatarSrc from '../assets/img/avatar.png'
import { Avatar } from '@material-ui/core'

const StyledTable = styled(Table)`
    &.css-quj9j6-MuiTable-root{
        border-radius: 20px;
        overflow: hidden;
    }

    & .css-15wwp11-MuiTableHead-root{
        background: #FCF9F3;
    }

    & .css-1ygcj2i-MuiTableCell-root, & .css-1azl6jz-MuiTableCell-root, & .css-1ex1afd-MuiTableCell-root, & .css-177gid-MuiTableCell-root, & .css-1ndpvdd-MuiTableCell-root, & .css-1yhpg23-MuiTableCell-root{
        border-bottom: 1px solid #f5f5f5;
    }
`
const StyledAvatar = styled(Avatar)`
    width: 40px !important;
    height: 40px !important;
    margin-right: 20px;
`

const StyledTableCellFlex = styled(TableCell)`
    &.css-1yhpg23-MuiTableCell-root{
        display: flex;
        align-items: center;
        justify-content: center;
    }  
`

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('#1213', 'Adam Kowalski', 'Kardiologia', "150zł", "Dostępny"),
  createData('#1213', 'Adam Kowalski', 'Kardiologia', "150zł", "Dostępny"),
  createData('#1213', 'Adam Kowalski', 'Kardiologia', "150zł", "Dostępny"),
  createData('#1213', 'Adam Kowalski', 'Kardiologia', "150zł", "Dostępny"),
  createData('#1213', 'Adam Kowalski', 'Kardiologia', "150zł", "Dostępny"),
];

export default function DoctorList() {
  return (
    
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Imię i nazwisko</TableCell>
            <TableCell align="center">Specjalizacja</TableCell>
            <TableCell align="center">Cena za 1h</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <StyledTableCellFlex align="center"><StyledAvatar  alt="Remy Sharp" src={avatarSrc}/>{row.calories}</StyledTableCellFlex>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    
  );
}