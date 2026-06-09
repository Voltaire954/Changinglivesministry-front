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
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/services/services/`)
      .then((res) => {
        console.log("API DATA:", res.data);

        setEvents(
          res.data.map((service) => ({
            title: service.title,

            // Keep your existing fields since these are working
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
      .catch((err) => console.error(err));
  }, []);

  const handleEventClick = (info) => {
    console.log("Clicked Event:", info.event);

    setSelectedEvent(info.event);
    setOpen(true);
  };

  return (
    <div
      style={{
        backgroundColor: "ghostwhite",
        padding: "1rem",
        borderRadius: "8px",
        color: "black",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />

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
    </div>
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
