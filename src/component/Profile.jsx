// src/pages/Profile.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: 20 }}>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <h2>{user?.username}</h2>
          <p>User ID: {user?.id}</p>
          <p>Email: {user?.email}</p>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <h3>Announcements</h3>
          <p>No announcements yet.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3>Live</h3>
          <p>No live content yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}
