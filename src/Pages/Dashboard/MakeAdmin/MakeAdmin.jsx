import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./MakeAdminStyle";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const classes = useStyles();

  /*
   * add email toa admin by form
   */

  const handlAdminInput = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleMakeAdminSubmit = (e) => {
    ///mmake admin;
    e.preventDefault();
    const user = { email };

    fetch("https://powerful-peak-13797.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          alert("admin added");
        }
      });
  };

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h3">
        Make a user admin
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={8}>
          <Box className={classes.serviceForm}>
            <form onSubmit={handleMakeAdminSubmit}>
              <TextField
                onBlur={handlAdminInput}
                defaultValue=""
                name="email"
                style={{ width: "75%" }}
                id="email"
                label="Email"
                type="email"
                variant="standard"
              />
              <Button
                style={{ width: "75%", marginTop: 20 }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MakeAdmin;
