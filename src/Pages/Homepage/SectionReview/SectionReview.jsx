import {
  Container,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardReview from "../../../Components/CardReview/CardReview";
import useAuth from "../../../Hooks/useAuth";
import { useStyles } from "./SectionReviewStyle";

const SectionReview = () => {
  const { loading } = useAuth();
  const classes = useStyles();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://powerful-peak-13797.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <Box className={classes.section}>
      <Container>
        <Typography variant="h6">What Our Client Says</Typography>
        <Typography className={classes.sectionHeading} variant="h3">
          Client Feedback
        </Typography>
        {loading ?? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress />
          </Box>
        )}
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid
              key={review._id}
              style={{ display: "grid" }}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <CardReview review={review}></CardReview>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionReview;
