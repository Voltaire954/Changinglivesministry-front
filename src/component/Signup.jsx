// src/components/Signup.jsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Signup({ open, handleClose, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_BASE_URL;


  const handleSignup = async () => {
    try {
      const res = await fetch(`${API}/api/users/register/`, {
        // create endpoint in Django
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        onSuccess();
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ p: 4, bgcolor: "white", mx: "auto", mt: 10, maxWidth: 400 }}>
        <h2>Sign Up</h2>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button variant="contained" onClick={handleSignup} sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Box>
    </Modal>
  );
}
