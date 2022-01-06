import { Box, Container, Typography, Grid, Paper } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React from "react";
import { useStyles } from "./SectionFeaturesStyle";
import img from "../../../assets/img/FeatureImage.png";
import { Star } from "@mui/icons-material";

const SectionFeatures = () => {
  const classes = useStyles();
  return (
    <Box xs={{ flexGrow: 1 }} className={classes.sectionFeature}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img
              className={classes.featureImg}
              src="https://i.ibb.co/2FC7T9J/service-seo.png"
              alt="agency"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.featureRight}>
              <Typography className={classes.sectionHeading} variant="h3">
                We Are Good at
              </Typography>
              <Paper className={classes.featureItem} elevation={0}>
                <Star />
                <Typography className={classes.featureText} variant="body1">
                  We prioritize business needs the most.
                </Typography>
              </Paper>
              <Paper className={classes.featureItem} elevation={0}>
                <Star />
                <Typography className={classes.featureText} variant="body1">
                  We use cutting edge technology for any solution.
                </Typography>
              </Paper>
              <Paper className={classes.featureItem} elevation={0}>
                <Star />
                <Typography className={classes.featureText} variant="body1">
                  We have proper Insight and experience in marketing.
                </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionFeatures;
