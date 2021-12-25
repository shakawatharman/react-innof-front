import React, { useEffect, useState } from "react";
// Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useStyles } from "./ManageUsersStyle";
import useAuth from "../../../Hooks/useAuth";
import { Chip, Stack, Typography } from "@mui/material";
import { Avatar, FormControl, MenuItem, Select } from "@material-ui/core";

const ManageUsers = () => {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const [allusers, setAllusers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const URL = `https://powerful-peak-13797.herokuapp.com/users`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAllusers(data));
  }, [user]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleRoleUpdate = (id) => {
    fetch(`https://powerful-peak-13797.herokuapp.com/users/role/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => alert("updated"));
  };

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h5">
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
            {allusers.map((each) => (
              <TableRow
                key={each._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <Avatar alt={each.displayName} src={each.photoURL} />
                    <Typography>{each.displayName}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="right">{each.email}</TableCell>
                <TableCell align="right">
                  {/* {each.role} */}
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      defaultValue={each.role === "admin" ? "admin" : "user"}
                      onChange={handleRoleChange}
                    >
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">
                  <Chip
                    onClick={() => handleRoleUpdate(each._id)}
                    type="submit"
                    style={{ cursor: "pointer" }}
                    label="UPDATE"
                    color="warning"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageUsers;
