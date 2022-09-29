import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material'

function createData(title, media, time, url) {
  return { title, media, time, url };
}

const rows = [
  createData('Gaming', 'Youtube Video', '11:00PM','Link',),
  createData('Rap Music', 'Spotify', '9:00AM', 'Link'),
  createData('EDM Music', 'Spotify', '2:00PM', 'Link'),
  createData('Coding Video', 'Youtube Video', '6:00AM', 'Link'),
  
];


const Self = (props) => {
  return (
    <Container sx={{height: '100vh', alignItems: 'center'}}> 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="right">Media</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.media}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></Container>
  )
}

export default Self