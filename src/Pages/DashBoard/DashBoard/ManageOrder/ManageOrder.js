import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const ManageOrder = () => {
    const {user} = useAuth();
    const [manageorder, setManageOrder] = useState([]);

    useEffect(()=>{

    fetch('https://mighty-island-81125.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setManageOrder(data))
    },[]);

    // const handleDeleteOrders = id =>{
    //   const url = `https://mighty-island-81125.herokuapp.com/orders/${id}`
    //   fetch(url,{
    //     method:'DELETE',
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     if(data.deletedCount > 0){
    //       alert('deleted success')
    //     }
    //   })

    // }
    
    return (
        <div>
            <h2>Manage Order: {manageorder.length}</h2>

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
          {manageorder.map((row) => (
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
              <TableCell align="right"><Button>Aprove</Button></TableCell>
              <TableCell align="right"><Button>Delete</Button></TableCell>
              {/* <TableCell align="right"><Button onClick = {()=> handleDeleteOrders(manageorder._id) }>Delete</Button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrder;