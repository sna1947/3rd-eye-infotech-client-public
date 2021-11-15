import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';



const MyOrder = () => {
    const {user} = useAuth();
    const [myorder, setMyOrder] = useState([]);

    useEffect(()=>{
      const url = `https://mighty-island-81125.herokuapp.com/orders?email=${user.email}`;
      console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => setMyOrder(data))
    },[])

    return (
        <div>
        <h2>My Order: {myorder.length}</h2>

        <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Email</TableCell>
        <TableCell align="right">Address</TableCell>
        <TableCell align="right">Phone No</TableCell>
        <TableCell align="right">Aprove</TableCell>
        <TableCell align="right">Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {myorder.map((row) => (
        <TableRow
          key={row._id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          {/* <TableCell align="right">{row.name}</TableCell> */}
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.Address}</TableCell>
          <TableCell align="right">{row.Phone}</TableCell>
          <TableCell align="right">{row.Aprove}</TableCell>
          <TableCell align="right">{row.Delete}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </div>
    );
};

export default MyOrder;