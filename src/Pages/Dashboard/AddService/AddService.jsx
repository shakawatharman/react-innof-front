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
import { useStyles } from "./AddServiceStyle";

const AddService = () => {
  const [service, setService] = useState({});
  const classes = useStyles();

  /*
   * submit order data by form
   */

  const handleServiceInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newFormnData = { ...service };
    newFormnData[field] = value;
    setService(newFormnData);
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();

    fetch("https://powerful-peak-13797.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Services added", result.insertedId);
        }
      });
  };

  return (
    <>
      <Typography style={{ margin: "20px 0" }} variant="h3">
        Add Service
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Box className={classes.serviceForm}>
            <form onSubmit={handleServiceSubmit}>
              <TextField
                onChange={handleServiceInput}
                defaultValue=""
                name="name"
                style={{ width: "75%" }}
                id="name"
                label="Name"
                type="text"
                variant="standard"
              />

              <TextField
                onChange={handleServiceInput}
                defaultValue=""
                name="price"
                style={{ width: "75%" }}
                id="price"
                label="Price"
                type="number"
                variant="standard"
              />

              <TextField
                onChange={handleServiceInput}
                defaultValue=""
                name="content"
                style={{ width: "75%" }}
                id="content"
                label="Content"
                type="text"
                variant="standard"
                multiline
                maxRows={4}
              />

              <TextField
                onChange={handleServiceInput}
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

export default AddService;
