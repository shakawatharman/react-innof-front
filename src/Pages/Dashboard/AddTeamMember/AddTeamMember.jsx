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
import { useStyles } from "./AddTeamMemberStyle";

const AddTeamMember = () => {
  const [team, setTeam] = useState({});
  const classes = useStyles();

  /*
   * submit order data by form
   */

  const handleTeamInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newFormnData = { ...team };
    newFormnData[field] = value;
    setTeam(newFormnData);
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();

    fetch("https://powerful-peak-13797.herokuapp.com/team-members", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(team),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("team added", result.insertedId);
        }
      });
  };

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h3">
        Add Team Member
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Box className={classes.serviceForm}>
            <form onSubmit={handleTeamSubmit}>
              <TextField
                onChange={handleTeamInput}
                defaultValue=""
                name="name"
                style={{ width: "75%" }}
                id="name"
                label="Name"
                type="text"
                variant="standard"
              />

              <TextField
                onChange={handleTeamInput}
                defaultValue=""
                name="profession"
                style={{ width: "75%" }}
                id="profession"
                label="Profession"
                type="text"
                variant="standard"
              />

              <TextField
                onChange={handleTeamInput}
                name="image"
                style={{ width: "75%" }}
                id="image"
                label="Image URL"
                type="text"
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

export default AddTeamMember;
