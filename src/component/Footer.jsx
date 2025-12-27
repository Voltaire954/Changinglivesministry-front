import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Changing Lives Ministry</h3>

          <ul className="support">
            <li a href="/contact">📞Contact</li>
            <li a href ="/contact">🙏Prayer</li>
            <li>👥Youth</li>
          </ul>
        </div>

        <div className="logo" />
      </div>
    </footer>
  );
}
