import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function About() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: "75rem" }}>
      <CardContent sx={{ display: "flex" }}>
        <Typography
          gutterBottom
          img
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          <img src="Joinus.jpg " alt="" />
        </Typography>
        <Typography variant="h5" component="div">
          Ecclesiastes 4:9-12, Two are better than one, because they have a good reward for their
          toil. For if they fall, one will lift up his fellow. But woe to him
          who is alone when he falls and has not another to lift him up! Again,
          if two lie together, they keep warm, but how can one keep warm alone?
          And though a man might prevail against one who is alone, two will
          withstand him—a threefold cord is not quickly broken.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
