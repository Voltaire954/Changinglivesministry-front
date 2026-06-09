import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Donation from "./Donation";
import PrayerDialog from "./PrayerDialog";

export default function Footer() {
  const [dBoxopen, setdBoxopen] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Changing Lives Ministry</h3>

          <ul className="support">
            <li>
              {" "}
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "whitesmoke",
                }}
              >
                📞Contact{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                to="/donation"
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "whitesmoke",
                }}
              >
                ⛪Donation
              </Link>
            </li>

            <li>
              {" "}
              <button
                onClick={() => setdBoxopen(true)}
                style={{
                  background: "none",
                  border: "none",
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontSize: "inherit",
                }}
              >
                🙏Prayer
              </button>
            </li>
            <li>👥Youth</li>
          </ul>
        </div>

        <div className="logo" />
      </div>
      <PrayerDialog open={dBoxopen} onClose={() => setdBoxopen(false)} />
    </footer>
  );
}
