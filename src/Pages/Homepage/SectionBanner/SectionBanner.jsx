import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./SectionBannerStyle";
import { spacing } from "@mui/system";
import bannerBg from "../../../assets/img/banner-img.jpg";
import { Link } from "react-router-dom";
const bannerBg3 =
  "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg";
const bannerBg4 =
  "https://panda.axiomthemes.com/wp-content/uploads/2021/11/image-1-copyright.svg";

const SectionBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerSection}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.bannerText}>
              <Typography
                style={{ textTransform: "uppercase", marginBottom: "20px" }}
                variant="body1"
              >
                All digital service in one place
              </Typography>
              <Typography className={classes.bannerHeading} variant="h2">
                Let Us serve you
              </Typography>
              <Link to="/contact">
                <Button className={classes.bannerBtn}>Contact Us</Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              style={{ width: "100%" }}
              className=""
              src="https://panda.axiomthemes.com/wp-content/uploads/2021/11/image-1-copyright.svg"
            ></img>
          </Grid>
        </Grid>

        {/* <Grid md="6" sm="12">
          <img
            src="https://panda.axiomthemes.com/wp-content/uploads/2021/11/image-1-copyright.svg"
            alt=""
          ></img>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default SectionBanner;
