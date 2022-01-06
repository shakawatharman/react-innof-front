import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function CardReview({ review }) {
  const { name, rating, image, feedback, profession } = review;
  return (
    <Card style={{ textAlign: "left" }}>
      <CardHeader
        avatar={
          <Avatar
            src={image}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        title={name}
        subheader={profession}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {feedback}
        </Typography>
      </CardContent>
    </Card>
  );
}
