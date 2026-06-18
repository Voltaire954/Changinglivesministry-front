import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <Card className="hero-card" elevation={0}>
            <CardContent>
              <h1>Changing Lives Ministry</h1>

              <p className="hero-scripture">
                Deuteronomy 6:5-6
              </p>

              <p className="hero-text">
                "And thou shalt love the Lord thy God with all thine heart,
                and with all thy soul, and with all thy might. And these
                words, which I command thee this day, shall be in thine heart."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="welcome-section">
        <h2>Welcome Home</h2>

        <p>
          We are a family of believers dedicated to serving THE MOST HIGH,
          growing in faith, and sharing the Gospel with our community.
        </p>
      </section>

      <section className="secondary-hero">
        <div className="secondary-overlay">
          <h2>Join Us In Worship</h2>

          <p>
            Experience powerful teaching, uplifting worship,
            and fellowship with believers.
          </p>
        </div>
      </section>
    </>
  );
}
