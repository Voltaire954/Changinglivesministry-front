// import { useState, useEffect } from "react";
// import axios from "axios";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";

// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";

// export default function Sermons() {
//   const API_URL = import.meta.env.VITE_API_BASE_URL;

//   const [sermons, setSermons] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedSermon, setSelectedSermon] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/api/sermons/sermons/`)
//       .then((res) => {
//         setSermons(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, [API_URL]);

//   const handleOpen = (sermon) => {
//     setSelectedSermon(sermon);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedSermon(null);
//   };

//   const video = selectedSermon?.media_files?.find(
//     (m) => m.media_type === "video",
//   );

//   return (
//     <>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
//           gap: "2rem",
//           padding: "2rem",
//         }}
//       >
//         {sermons.map((sermon) => {
//           const thumbnail = sermon.media_files?.find(
//             (m) => m.media_type === "image",
//           );

//           return (
//             <Card
//               key={sermon.id}
//               onClick={() => handleOpen(sermon)}
//               sx={{
//                 borderRadius: 3,
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: 10,
//                 },
//               }}
//             >
//               {thumbnail && (
//                 <CardMedia
//                   component="img"
//                   height="220"
//                   image={thumbnail.file}
//                   alt={thumbnail.title}
//                 />
//               )}

//               <CardContent>
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   {sermon.title}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary">
//                   {sermon.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>{selectedSermon?.title}</DialogTitle>

//         <DialogContent>
//           <Typography sx={{ mb: 2 }}>{selectedSermon?.description}</Typography>

//           {video && (
//             <video
//               controls
//               preload="metadata"
//               width="100%"
//               height="400"
//               style={{
//                 borderRadius: "10px",
//                 background: "black",
//               }}
//             >
//               <source src={video.file} type="video/mp4" />
//               Your browser does not support video playback.
//             </video>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

export default function Sermons() {
const API_URL = import.meta.env.VITE_API_BASE_URL;

const [sermons, setSermons] = useState([]);
const [open, setOpen] = useState(false);
const [selectedSermon, setSelectedSermon] = useState(null);

useEffect(() => {
axios
.get(${API_URL}/api/sermons/sermons/)
.then((res) => {
console.log("SERMONS:", res.data);
setSermons(res.data);
})
.catch((err) => console.error("Sermon API Error:", err));
}, [API_URL]);

const handleOpen = (sermon) => {
console.log("SELECTED SERMON:", sermon);
setSelectedSermon(sermon);
setOpen(true);
};

const handleClose = () => {
setOpen(false);
setSelectedSermon(null);
};

const getEmbedUrl = (url) => {
if (!url) return null;

if (url.includes("youtube.com/watch?v=")) {
  return url.replace("watch?v=", "embed/").split("&")[0];
}

if (url.includes("youtu.be/")) {
  const id = url.split("youtu.be/")[1];
  return `https://www.youtube.com/embed/${id}`;
}

return url;



};

return (
<>
<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
gap: "2rem",
padding: "2rem",
}}
>
{sermons.map((sermon) => (
<Card
key={sermon.id}
onClick={() => handleOpen(sermon)}
sx={{
borderRadius: 3,
cursor: "pointer",
transition: "0.3s ease",
"&:hover": {
transform: "translateY(-6px)",
boxShadow: 12,
},
}}
>
{sermon.thumbnail && (

)}

        <CardContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700 }}
          >
            {sermon.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {sermon.description?.slice(0, 100)}...
          </Typography>
        </CardContent>
      </Card>
    ))}
  </div>

  <Dialog
    open={open}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
  >
    <DialogTitle>
      {selectedSermon?.title}
    </DialogTitle>

    <DialogContent>
      <Typography sx={{ mb: 2 }}>
        {selectedSermon?.description}
      </Typography>

      {selectedSermon?.video_url && (
        <iframe
          width="100%"
          height="450"
          src={getEmbedUrl(selectedSermon.video_url)}
          title={selectedSermon.title}
          allowFullScreen
          style={{
            border: "none",
            borderRadius: "10px",
          }}
        />
      )}
    </DialogContent>
  </Dialog>
</>



);
}



// import { useState, useEffect } from "react";
// import axios from "axios";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";

// export default function Sermons() {
//   const API_URL = import.meta.env.VITE_API_BASE_URL;

//   const [sermons, setSermons] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedSermon, setSelectedSermon] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/api/sermons/sermons/`)
//       .then((res) => {
//         console.log("SERMONS:", res.data);
//         setSermons(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, [API_URL]);

//   const handleOpen = (sermon) => {
//     setSelectedSermon(sermon);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedSermon(null);
//   };

//   const video = selectedSermon?.media_files?.find(
//     (m) => m.media_type === "video",
//   );
//   console.log("SELECTED SERMON:", selectedSermon);
//   console.log("VIDEO:", video);

//   return (
//     <>
//       {/* GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
//           gap: "2rem",
//           padding: "2rem",
//         }}
//       >
//         {sermons.map((sermon) => {
//           console.log("SERMON", sermon);
//           const thumbnail = sermon.media_files?.find(
//             (m) => m.media_type === "image",
//           );
//           console.log("SERMON", sermon);

//           return (
//             <Card
//               key={sermon.id}
//               onClick={() => handleOpen(sermon)}
//               sx={{
//                 borderRadius: 3,
//                 cursor: "pointer",
//                 transition: "0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: 12,
//                 },
//               }}
//             >
//               {thumbnail && (
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={thumbnail.file}
//                   alt={thumbnail.title}
//                 />
//               )}

//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                   {sermon.title}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary">
//                   {sermon.description?.slice(0, 100)}...
//                 </Typography>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       {/* MODAL PLAYER */}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>{selectedSermon?.title}</DialogTitle>

//         <DialogContent>
//           <Typography sx={{ mb: 2 }}>{selectedSermon?.description}</Typography>

//           {video && (
//             <video
//               controls
//               autoPlay
//               style={{
//                 width: "100%",
//                 borderRadius: "10px",
//                 background: "black",
//               }}
//             >
//               <source src={video.file} type="video/mp4" />
//             </video>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import axios from "axios";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";

// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";

// export default function Sermons() {
//   const [sermons, setSermons] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedSermon, setSelectedSermon] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/sermons/sermons/")
//       .then((res) => {
//         setSermons(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const handleOpen = (sermon) => {
//     setSelectedSermon(sermon);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedSermon(null);
//   };

//   const video = selectedSermon?.media_files?.find(
//     (m) => m.media_type === "video",
//   );

//   console.log("🎥 VIDEO OBJECT:", video);
//   console.log("🎥 VIDEO FILE PATH:", video?.file);

//   return (
//     <>
//       {/* GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
//           gap: "2rem",
//           padding: "2rem",
//         }}
//       >
//         {sermons.map((sermon) => {
//           const thumbnail = sermon.media_files?.find(
//             (m) => m.media_type === "image",
//           );

//           return (
//             <Card
//               key={sermon.id}
//               onClick={() => handleOpen(sermon)}
//               sx={{
//                 borderRadius: 3,
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: 10,
//                 },
//               }}
//             >
//               {thumbnail && (
//                 <CardMedia
//                   component="img"
//                   height="220"
//                   image={`http://127.0.0.1:8000${thumbnail.file}`}
//                   alt={thumbnail.title}
//                 />
//               )}

//               <CardContent>
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   {sermon.title}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary">
//                   {sermon.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       {/* MODAL */}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>{selectedSermon?.title}</DialogTitle>

//         <DialogContent>
//           <Typography sx={{ mb: 2 }}>{selectedSermon?.description}</Typography>

//           {video && (
//             <video
//               controls
//               preload="metadata"
//               width="100%"
//               height="400"
//               style={{
//                 borderRadius: "10px",
//                 background: "black",
//               }}
//             >
//               <source src={video.file} type="video/mp4" />
//             </video>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
{
  /* <Card sx={{ minWidth: 300, maxWidth: "75rem" }}>
        <CardContent sx={{ display: "flex" }}>
        <Typography
        gutterBottom
        img
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            <img src="Sermon3.jpg " alt="" />
          </Typography>
          <Typography variant="h5" className="sermon" >
            Philippians 2:3-16, Do nothing from selfish ambition or conceit, but in humility count
            others more significant than yourselves. Let each of you look not
            only to his own interests, but also to the interests of others. Have
            this mind among yourselves, which is yours in Christ Jesus, who,
            though he was in the form of God, did not count equality with God a
            thing to be grasped, but emptied himself, by taking the form of a
            servant, being born in the likeness of men. ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 300, maxWidth: "75rem" }}>
        <CardContent sx={{ display: "flex" }}>
          <Typography
            gutterBottom
            img
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            <img src="Sermon2.jpg " alt="" />
          </Typography>
          <Typography variant="h5" className="sermon" component="div">
            Romans 12:3-13, For by the grace given to me I say to everyone among you not to
            think of himself more highly than he ought to think, but to think
            with sober judgment, each according to the measure of faith that God
            has assigned. For as in one body we have many members, and the
            members do not all have the same function, so we, though many, are
            one body in Christ, and individually members one of another. Having
            gifts that differ according to the grace given to us, let us use
            them: if prophecy, in proportion to our faith; if service, in our
            serving; the one who teaches, in his teaching; ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */
}
