import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function Calendar() {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!API_URL) {
      console.error("API_URL is missing");
      return;
    }

    axios
      .get(`${API_URL}/api/services/services/`)
      .then((res) => {
        console.log("API DATA:", res.data);

        setEvents(
          res.data.map((service) => ({
            title: service.title,

            start: service.start_time,
            finish: service.end_time,
            begin: service.start_date,
            end: service.end_date,

            extendedProps: {
              description: service.description,
              startDate: service.start_date,
              endDate: service.end_date,
              startTime: service.start_time,
              endTime: service.end_time,
            },
          })),
        );
      })
      .catch((err) => console.error("Calendar API error:", err));
  }, [API_URL]);

  const handleEventClick = (info) => {
    console.log("Clicked Event:", info.event);

    setSelectedEvent(info.event);
    setOpen(true);
  };

  return (
    <>
      <section className="calendar-hero">
        <div className="calendar-overlay">
          <div className="calendar-content">
            <h1>Church Calendar</h1>

            <p>
              Stay connected with worship services, ministry events, fellowship
              gatherings, and community outreach opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="calendar-scripture">
        <blockquote>
          "To every thing there is a season, and a time to every purpose under
          the heaven."
        </blockquote>

        <p>Ecclesiastes 3:1</p>
      </section>

      <section className="calendar-intro">
        <h2>Upcoming Services & Events</h2>

        <p>
          View upcoming worship services, bible studies, youth events,
          fellowship gatherings, and ministry activities.
        </p>
      </section>

      <section className="calendar-wrapper">
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
          />
        </div>
      </section>

      <section className="calendar-cta">
        <h2>Join Us</h2>

        <p>
          We welcome visitors, families, and believers from all walks of life.
          Check the calendar regularly for upcoming events.
        </p>
      </section>

      {/* KEEP YOUR EXISTING DIALOG EXACTLY AS IS */}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{selectedEvent?.title || "Service Details"}</DialogTitle>

        <DialogContent>
          <DialogContentText component="div">
            <p>
              <strong>Description:</strong>
            </p>

            <p>
              {selectedEvent?.extendedProps?.description ||
                "No description available"}
            </p>

            <p>
              <strong>Start Date:</strong>{" "}
              {selectedEvent?.extendedProps?.startDate}
            </p>

            <p>
              <strong>End Date:</strong> {selectedEvent?.extendedProps?.endDate}
            </p>

            <p>
              <strong>Start Time:</strong>{" "}
              {selectedEvent?.extendedProps?.startTime || "Not specified"}
            </p>

            <p>
              <strong>End Time:</strong>{" "}
              {selectedEvent?.extendedProps?.endTime || "Not specified"}
            </p>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import axios from "axios";

// export default function Calendar() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleEventClick = (info) => {
//     setSelectedEvent(info.event);
//     setOpen(true);
//   };

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/services/services/")
//       .then((res) => {
//         setEvents(
//           res.data.map((service) => ({
//             title: service.title,
//             start: service.start_time,
//             finish: service.end_time,
//             begin: service.start_date,
//             end: service.end_date,
//             extendedProps: {
//               description: service.description,
//             },
//           })),
//         );
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: "ghostwhite",
//         padding: "1rem",
//         borderRadius: "8px",
//         color: "black",
//       }}
//     >
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//       />
//     </div>
//   );
// }
