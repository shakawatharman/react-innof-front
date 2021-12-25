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
import { Avatar, IconButton, Stack } from "@mui/material";
import { Delete } from "@mui/icons-material";

const ManageServices = () => {
  const [userReviews, setUserReviews] = useState([]);
  const { user } = useAuth();

  /**
   * Fetching Data
   */
  useEffect(() => {
    const URL = `https://powerful-peak-13797.herokuapp.com/reviews`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user]);

  /**
   * Deleting Data
   */
  const handleDeleteReviews = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://powerful-peak-13797.herokuapp.com/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = userReviews.filter((each) => each._id !== id);
            setUserReviews(remaining);
          }
        });
    }
  };

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h5">
        User Reviews : {userReviews.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>User's Name</TableCell>
              <TableCell align="right">Profession</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Feedback</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userReviews.map((each) => (
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
                    <Avatar alt={each.name} variant="square" src={each.image} />
                    <Typography>{each.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="right">{each.profession}</TableCell>
                <TableCell align="right">{each.rating}</TableCell>
                <TableCell align="right">{each.feedback}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleDeleteReviews(each._id)}
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

export default ManageServices;
