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

const ManageServices = () => {
    const [ manageServices, setManageServices ] = useState([]);
    const { user } =  useAuth();

    useEffect(()=>{
        const URL = `https://powerful-peak-13797.herokuapp.com/services`;
        fetch(URL)
            .then(res=>res.json())
            .then(data=>setManageServices(data))
        },[user])

        console.log("from manage order page", manageServices)

    return (
        <>
            <Typography style={{margin:'20px 0'}} variant='h5'>
                Manage Services : {manageServices.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Service Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Content</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    manageServices.map( services => 
                        <TableRow
                        key={services._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{services.name}</TableCell>
                            <TableCell align="right">{services.price}</TableCell>
                            <TableCell align="right">{services.image}</TableCell>
                            <TableCell align="right">{services.content.slice(0,40)}</TableCell>
                            <TableCell align="right">Del || Edit</TableCell>
                        </TableRow>
                    )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageServices;