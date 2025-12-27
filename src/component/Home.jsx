import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <>
      <div className="bg-image">Home</div>
      <Card variant="outlines" sx={{ maxWidth: "75rem", bgcolor:"transparent" }} className="join-us">
        <CardContent className="Hero">
          Deuteronomy 6:5-6, And thou shalt love the Lord thy God with all thine heart, and with
          all thy soul, and with all thy might. 6 And these words, which I
          command thee this day, shall be in thine heart:
        </CardContent>
      </Card>
      <div className="bg-image2">2nd image</div>
    </>
  );
}
