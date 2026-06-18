import React from "react";

export default function About() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="about-hero">
        <div className="about-overlay">
          <div className="about-content">
            <h1>About Changing Lives Ministry</h1>

            <p>
              Building faith, strengthening families, and serving our community
              through the love of THE MOST HIGH.
            </p>
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}

      <section className="about-scripture">
        <blockquote>Ecclesiastes 4:9-12</blockquote>

        <p>
          Two are better than one, because they have a good reward for their
          toil. For if they fall, one will lift up his fellow... a threefold
          cord is not quickly broken.
        </p>
      </section>

      {/* OUR MISSION */}

      <section className="about-mission">
        <div className="mission-image">
          <img src="/Joinus.jpg" alt="Church Fellowship" />
        </div>

        <div className="mission-text">
          <h2>Our Mission</h2>

          <p>
            Our mission is to proclaim the Gospel, strengthen believers, support
            families, and reach our community through faith, fellowship, and
            service.
          </p>

          <p>
            We believe every individual has a purpose and a calling. Through
            worship, prayer, teaching, and community outreach, we strive to help
            people grow closer to THE MOST HIGH.
          </p>
        </div>
      </section>

      {/* VALUES */}

      <section className="values-section">
        <h2>What We Believe</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Faith</h3>
            <p>Trusting THE MOST HIGH and walking according to His word.</p>
          </div>

          <div className="value-card">
            <h3>Family</h3>
            <p>Building strong relationships rooted in love and unity.</p>
          </div>

          <div className="value-card">
            <h3>Service</h3>
            <p>Serving our community through compassion and outreach.</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-cta">
        <h2>Come Worship With Us</h2>

        <p>
          We welcome visitors, families, and believers from all walks of life.
        </p>

        <button className="join-btn">Join Us This Sunday</button>
      </section>
    </>
  );
}
