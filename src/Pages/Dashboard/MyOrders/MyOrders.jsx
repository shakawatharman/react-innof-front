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
import { Chip } from "@mui/material";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const URL = `https://powerful-peak-13797.herokuapp.com/myorders?email=${user?.email}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user]);

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h5">
        My Orders : {myOrder.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Service Name</TableCell>
              <TableCell>User</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myOrder.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.service_title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {order.name}
                </TableCell>
                <TableCell align="right">{order.service_price}</TableCell>
                <TableCell align="right">{order.address}</TableCell>
                <TableCell align="right">12/2/2012</TableCell>
                <TableCell align="right">
                  <Chip
                    label={order.status}
                    color={order.status === "Pending" ? "warning" : "success"}
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

export default MyOrders;
