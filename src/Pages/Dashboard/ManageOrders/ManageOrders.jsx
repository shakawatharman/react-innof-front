import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
// Table 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

const ManageOrders = () => {
    const [ manageOrder, setManageOrder ] = useState([]);
    const { user } =  useAuth();

    useEffect(()=>{
        const URL = `https://powerful-peak-13797.herokuapp.com/manageorders`;
        fetch(URL)
            .then(res=>res.json())
            .then(data=>setManageOrder(data))
        },[user])

        console.log("from manage order page", manageOrder)

    return (
        <>
            <Typography style={{margin:'20px 0'}} variant='h5'>
                Manage Orders : {manageOrder.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Service Name</TableCell>
                        <TableCell align="right">User</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    manageOrder.map( order => 
                        <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{order.service_title}</TableCell>
                            <TableCell align="right">{order.name}</TableCell>
                            <TableCell align="right">{order.email}</TableCell>
                            <TableCell align="right">12/2/2012</TableCell>
                            <TableCell align="right">{order.service_status}</TableCell>
                            <TableCell align="right"><Chip label="UPDATE" color="warning" size="small" /></TableCell>
                        </TableRow>
                    )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageOrders;