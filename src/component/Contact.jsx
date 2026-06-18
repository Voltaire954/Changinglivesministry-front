import React from "react";

export default function Contact() {
  return (
    <>
      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-overlay">
          <div className="contact-content">
            <h1>Contact Us</h1>

            <p>
              We would love to hear from you. Whether you have questions,
              prayer requests, or would like to visit our ministry,
              we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}

      <section className="contact-scripture">
        <blockquote>
          "Call unto me, and I will answer thee, and shew thee great and mighty
          things, which thou knowest not."
        </blockquote>

        <p>Jeremiah 33:3</p>
      </section>

      {/* CONTACT INFO */}

      <section className="contact-section">
        <div className="contact-info">

          <div className="contact-card">
            <h3>📍 Location</h3>

            <p>
              Fort Lauderdale, FL 33319
            </p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>

            <p>
              changinglivesministryclg@yahoo.com
            </p>
          </div>

          <div className="contact-card">
            <h3>⛪ Worship Services</h3>

            <p>
              Join us weekly for worship, fellowship, and biblical teaching.
            </p>
          </div>

        </div>
      </section>

      {/* MAP */}

      <section className="map-section">

        <h2>Find Us</h2>

        <div className="map-container">

          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57286.45883907749!2d-80.26568373827764!3d26.18354358459365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90429a2bd83eb%3A0x717ed9f60892822e!2sFort%20Lauderdale%2C%20FL%2033319!5e0!3m2!1sen!2sus!4v1766784479255!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>

      {/* VISITOR CTA */}

      <section className="visitor-section">

        <h2>Planning A Visit?</h2>

        <p>
          We welcome visitors, families, and believers from all backgrounds.
          Come worship with us and experience fellowship in a loving
          Christ-centered environment.
        </p>

        <button className="visit-btn">
          Join Us This Sunday
        </button>

      </section>
    </>
  );
}
