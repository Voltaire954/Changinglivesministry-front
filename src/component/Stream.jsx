import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Stream() {
  const [live, setLive] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/livestream/`)
      .then((res) => {
        const activeStream = res.data.find(l => l.is_active);
        setLive(activeStream);
      })
      .catch(console.error);
  }, [API_URL]);

  if (!live) return <p>No live stream right now.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{live.title}</h2>

      <iframe
        width="100%"
        height="500"
        src={live.stream_url}
        allowFullScreen
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
}
