import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
// Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, FormControl, IconButton, MenuItem, Select } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStyles } from "./ManageOrderStyle";

const ManageOrders = () => {
  const classes = useStyles();
  const [status, setStatus] = useState("");
  const [manageOrder, setManageOrder] = useState([]);
  const { user } = useAuth();

  /**
   * Fetching Order Data
   */
  useEffect(() => {
    const URL = `https://powerful-peak-13797.herokuapp.com/manageorders`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, [user]);

  /**
   * CHANGE ORDER STATUS
   */

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStatusUpdate = (id) => {
    fetch(
      `https://powerful-peak-13797.herokuapp.com/manageorders/status/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((data) => alert("updates"));
  };

  /**
   * Delete an order
   */

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(
        `https://powerful-peak-13797.herokuapp.com/manageorders/delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = manageOrder.filter((pd) => pd._id !== id);
            setManageOrder(remaining);
          }
        });
    }
  };

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h5">
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
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {manageOrder.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.service_title}
                </TableCell>
                <TableCell align="right">{order.name}</TableCell>
                <TableCell align="right">{order.email}</TableCell>
                <TableCell align="right">12/2/2012</TableCell>
                <TableCell align="right">
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: 120, p: 0 }}
                  >
                    <Select
                      defaultValue={
                        order.status === "Pending" ? "Pending" : "Approved"
                      }
                      onChange={handleStatusChange}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Approved">Approved</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">
                  <Chip
                    onClick={() => handleStatusUpdate(order._id)}
                    type="submit"
                    style={{ cursor: "pointer" }}
                    label="UPDATE"
                    color="warning"
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleDeleteOrder(order._id)}
                    color="secondary"
                    aria-label="add an alarm"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageOrders;
