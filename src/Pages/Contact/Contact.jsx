import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";

import { useStyles } from "./ContactStyle";
import Navbar from "../../Components/Navbar/Navbar";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Footer from "../../Components/Footer/Footer";
import img from "../../assets/img/innofLogo.png";

const Contact = () => {
  const [msg, setMsg] = useState({});
  const classes = useStyles();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(msg);
    alert("msg sent");
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...msg };

    newData[field] = value;
    setMsg(newData);
  };
  return (
    <>
      <Navbar></Navbar>
      <PageBanner heading="Contact"></PageBanner>
      <Box style={{ padding: "50px 0" }} className={classes.heading}>
        <Container>
          <Typography style={{ marginBottom: 40 }} variant="h5">
            Get In Touch
          </Typography>
          <img
            style={{ maxWidth: 300, marginBottom: 40 }}
            src={img}
            alt="innof"
          ></img>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid className={classes.loginForm} item xs={12} md={6}>
              <Typography variant="h6">Contact Form</Typography>

              <form onSubmit={handleContactSubmit}>
                <TextField
                  onBlur={handleOnChange}
                  name="name"
                  style={{ width: "75%" }}
                  id="name"
                  label="Name"
                  type="text"
                  variant="standard"
                />
                <TextField
                  onBlur={handleOnChange}
                  name="email"
                  style={{ width: "75%" }}
                  id="email"
                  label="Email"
                  type="email"
                  variant="standard"
                />
                <TextField
                  onBlur={handleOnChange}
                  name="phone"
                  style={{ width: "75%" }}
                  id="phone"
                  label="Phone"
                  variant="standard"
                  type="phone"
                />
                <TextField
                  onBlur={handleOnChange}
                  name="msg"
                  style={{ width: "75%" }}
                  id="msg"
                  label="Your Message"
                  variant="standard"
                  type="text"
                />
                <Button
                  style={{ width: "75%", marginTop: 20 }}
                  type="Send"
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </form>

              {/* <Alert style={{ marginTop: "20px" }} severity="warning">
                  {error}
                </Alert> */}
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: 40 }} container spacing={4}></Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Contact;
