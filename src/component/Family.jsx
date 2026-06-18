import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Family() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/Family1.jpg",
    "/Family2.jpg",
    "/Family3.jpg",
    "/Family4.jpg",
    "/Family5.jpg",
    "/Family6.jpg",
    "/Family7.jpg",
    "/Family8.jpg",
  ];

  return (
    <>
      {/* HERO */}

      <section className="family-hero">
        <div className="family-overlay">
          <div className="family-content">
            <h1>Our Church Family</h1>

            <p>
              "Behold, how good and how pleasant it is for brethren to dwell
              together in unity." — Psalm 133:1
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="family-intro">
        <h2>Growing Together In Faith</h2>

        <p>
          We believe church is more than a building. It is a family united in
          worship, fellowship, prayer, and service to THE MOST HIGH.
        </p>
      </section>

      {/* CAROUSEL */}

      <section className="gallery-section">
        <h2>Moments From Our Ministry</h2>

        <div className="carousel">
          {[1, 2].map((group) => (
            <div
              key={group}
              aria-hidden={group === 2}
              className="group"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="gallery-card"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt="Church Family" />

                  <div className="gallery-overlay">
                    <span>View Photo</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SCRIPTURE */}

      <section className="family-scripture">
        <blockquote>
          "And let us consider one another to provoke unto love and to good
          works: Not forsaking the assembling of ourselves together..."
        </blockquote>

        <p>Hebrews 10:24-25</p>
      </section>

      {/* MODAL */}

      <Modal
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
      >
        <Box className="modal-image-container">
          <img
            src={selectedImage}
            alt="Church Family"
            className="modal-image"
          />
        </Box>
      </Modal>
    </>
  );
}
