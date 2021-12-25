import React from "react";
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
import { useStyles } from "./AboutStyle";
import Navbar from "../../Components/Navbar/Navbar";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Footer from "../../Components/Footer/Footer";
import img from "../../assets/img/innofLogo.png";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <PageBanner heading="About"></PageBanner>
      <Box style={{ padding: "50px 0" }} className={classes.heading}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid className={classes.abouttext} item xs={12} md={8}>
              <Typography style={{ marginBottom: 40 }} variant="h5">
                Looking for a modern agency in Bangladesh?
              </Typography>
              <img
                style={{ maxWidth: 300, marginBottom: 40 }}
                src={img}
                alt="innof"
              ></img>
              <Typography gutterBottom className="" variant="body1">
                INNOF is a full service independent advertising agency
                specialized new-media/digital media located in Dhaka Bangladesh.
                Serving from 2009 in a mission to increase brand’s market share,
                launch new products with a bang and out-innovate the
                competition.
              </Typography>
              <Typography gutterBottom className="" variant="body1">
                We have brought strategy design and technology to help
                businesses thrive in rapidly changing market. We do research and
                find the truth behind a brand and find transformative ideas that
                seduce the heart of consumer.
              </Typography>

              <Typography gutterBottom className="" variant="body1">
                We believe in real time innovation, quantifiable result and
                lasting impression. In these 6 busy years we have served around
                two hundred clients on three hundred projects successfully.
                Please check what our clients say and our works to understand
                better about us.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Grid container spacing={4}></Grid>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default About;
