import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Login from "./Login";
import Signup from "./Signup";
import Donation from "./Donation";
import Calendar from "./Calendar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // redirect home on logout
  };

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
    setLoginOpen(false);
    navigate("/profile");
  };

  const handleSignupSuccess = (newUser) => {
    setUser(newUser);
    setSignupOpen(false);
    navigate("/profile");
  };

  return (
    <>
      <Box>
        <AppBar className="app-bar" position="static">
          <Toolbar>
            <div className="logo" onClick={() => navigate("/")}></div>
            <Link to="/">Home</Link>
            <Link to="/family">Family</Link>
            <Link to="/sermon">Sermons</Link>
            <Link to="/about">About us</Link>
            <Link to="/stream">Lives</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/donation">Donations</Link>

            {/* {user ? (
              <>
                <Button color="inherit">Hi, {user.username}</Button>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => setLoginOpen(true)}>
                  Calendar
                </Button>
                <Button
                  color="inherit"
                  onClick={() => setSignupOpen(true)}
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  Donations
                </Button>
              </>
            )} */}
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          backgroundColor: "red",
        }}
      >
        <AppBar className="app-bar2" position="static">
          <Toolbar>
            <div className="logo" onClick={() => navigate("/")} />
            <Link to="/">Home</Link>

            <Link to="/sermon">Sermons</Link>

            <Link to="/stream">Lives</Link>
            <IconButton
              className=" menu-button"
              sx={{ marginLeft: "auto", color: "black" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            padding: 2,
            gap: 2,
          }}
        >
          <Link to="/family" onClick={() => setDrawerOpen(false)}>
            Family
          </Link>

          <Link to="/about" onClick={() => setDrawerOpen(false)}>
            About Us
          </Link>

          <Link to="/contact" onClick={() => setDrawerOpen(false)}>
            Contact Us
          </Link>

          <Link to="/calendar" onClick={() => setDrawerOpen(false)}>
            Calendar
          </Link>

          <Link to="/donation" onClick={() => setDrawerOpen(false)}>
            Donations
          </Link>
        </Box>
      </Drawer>
      <Login
        open={loginOpen}
        handleClose={() => setLoginOpen(false)}
        onSuccess={(user) => {
          setUser(user);
          navigate("/profile"); // <-- redirect here
        }}
      />
      <Signup
        open={signupOpen}
        handleClose={() => setSignupOpen(false)}
        onSignup={handleSignupSuccess}
        onSuccess={handleSignupSuccess}
      />
    </>
  );
}
