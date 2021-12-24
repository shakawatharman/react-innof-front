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
import { Avatar, IconButton, Stack } from '@mui/material';
import { Delete } from '@mui/icons-material';

const ManageServices = () => {
    const [ manageServices, setManageServices ] = useState([]);
    const { user } =  useAuth();

    /**
     * Fetching Data
     */
    useEffect(()=>{
        const URL = `https://powerful-peak-13797.herokuapp.com/services`;
        fetch(URL)
            .then(res=>res.json())
            .then(data=>setManageServices(data))
        },[user])
    
    /**
     * Deleting Data
     */
    const handleDeleteService = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if(proceed){
            fetch(`https://powerful-peak-13797.herokuapp.com/services/${id}`,{
            method: "DELETE",
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("deleted successfully");
              const remaining = manageServices.filter((pd) => pd._id !== id);
              setManageServices(remaining);
            }
          });
        }
    }

        

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
                            <TableCell component="th" scope="row">
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
                                <Avatar alt={services.name} variant="square" src={services.image} />
                                <Typography>{services.name}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell align="right">{services.price}</TableCell>
                            <TableCell align="right">{services.content.slice(0,40)}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={()=>handleDeleteService(services._id)} color="secondary" aria-label="add an alarm">
                                    <Delete />
                                </IconButton>
                            </TableCell>
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