import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./PageBannerStyle";

const PageBanner = ({ heading }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.pageBanner}
        style={{
          backgroundImage:
            "url(https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/marketing-bg8.png),linear-gradient(130deg,#352597 0%,#8686FF 100%)",
        }}
      >
        <Box className={classes.pageBanner}>
          <Container>
            <Grid container>
              <Grid sx={{ mt: 30 }} item sm={12}>
                <Typography style={{ color: "white" }} variant="h1">
                  {heading}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* <Box className={classes.bottomStyle}></Box> */}
      </Box>
    </>
  );
};

export default PageBanner;
