import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
      <Card sx={{ minWidth: 300, maxWidth: "75rem" }}>
        <CardContent sx={{ display: "flex" }}>
          <Typography
            gutterBottom
            img
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            <img src="Sermon3.jpg " alt="" />
          </Typography>
          <Typography variant="h5" className="sermon" >
            Philippians 2:3-16, Do nothing from selfish ambition or conceit, but in humility count
            others more significant than yourselves. Let each of you look not
            only to his own interests, but also to the interests of others. Have
            this mind among yourselves, which is yours in Christ Jesus, who,
            though he was in the form of God, did not count equality with God a
            thing to be grasped, but emptied himself, by taking the form of a
            servant, being born in the likeness of men. ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 300, maxWidth: "75rem" }}>
        <CardContent sx={{ display: "flex" }}>
          <Typography
            gutterBottom
            img
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            <img src="Sermon2.jpg " alt="" />
          </Typography>
          <Typography variant="h5" className="sermon" component="div">
            Romans 12:3-13, For by the grace given to me I say to everyone among you not to
            think of himself more highly than he ought to think, but to think
            with sober judgment, each according to the measure of faith that God
            has assigned. For as in one body we have many members, and the
            members do not all have the same function, so we, though many, are
            one body in Christ, and individually members one of another. Having
            gifts that differ according to the grace given to us, let us use
            them: if prophecy, in proportion to our faith; if service, in our
            serving; the one who teaches, in his teaching; ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
