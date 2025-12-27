import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <>
      <Card sx={{ minWidth: 300, maxWidth: "75rem" }}>
        <CardContent sx={{ display: "flex" }}>
          <Typography img sx={{ color: "text.secondary", fontSize: 14 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57286.45883907749!2d-80.26568373827764!3d26.18354358459365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90429a2bd83eb%3A0x717ed9f60892822e!2sFort%20Lauderdale%2C%20FL%2033319!5e0!3m2!1sen!2sus!4v1766784479255!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Typography>
          <Typography variant="h5" component="div">
            🏘️Fort Lauderdale, FL, United States, 33319
          </Typography>
          <Typography variant="h5" component="div">
            📨changinglivesministryclg@yahoo.com
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
