import React, { useEffect, useState } from 'react';
// Table 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useStyles } from './ManageUsersStyle';
import useAuth from '../../../Hooks/useAuth';
import { Chip, Typography } from '@mui/material';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const ManageUsers = () => {

    const classes = useStyles()
    const [role, setRole] = useState("");
    const [ allusers, setAllusers ] = useState([]);
    const { user } =  useAuth();

    useEffect(()=>{
        const URL = `https://powerful-peak-13797.herokuapp.com/users`;
        fetch(URL)
            .then(res=>res.json())
            .then(data=>setAllusers(data))
        },[user])


        const handleRoleChange = (e) => {
            setRole(e.target.value);
        };

    return (
        <>
            <Typography style={{margin:'20px 0'}} variant='h5'>
                Manage Users : {allusers.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>User's Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        {/* <TableCell align="right">Image</TableCell> */}
                        <TableCell align="right">Role</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    allusers.map( each => 
                        <TableRow
                        key={each._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{each.displayName}</TableCell>
                            <TableCell align="right">{each.email}</TableCell>
                            <TableCell align="right">
                                {/* {each.role} */}
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                    value={role}
                                    onChange={handleRoleChange}
                                    >
                                    <MenuItem value="User">User</MenuItem>
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
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

export default ManageUsers;