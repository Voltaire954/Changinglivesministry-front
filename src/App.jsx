import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/Home.css";
import "./styles/Family.css";
import "./styles/Sermons.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Footer.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ButtonAppBar from "./component/Header";
import Footer from "./component/Footer";
import Family from "./component/Family";
import About from "./component/About";
import Contact from "./component/Contact";
import BasicCard from "./component/Sermons";
import Stream from "./component/Stream";
import Login from "./component/Login";
import Profile from "./component/Profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/family" element={<Family />} />
          <Route path="/sermon" element={<BasicCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
