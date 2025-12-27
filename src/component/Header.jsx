import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Login from "./Login";
import Signup from "./Signup";

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Link to="/">Home</Link>
            <Link to="/family">Family</Link>
            <Link to="/sermon">Sermons</Link>
            <Link to="/about">About us</Link>
            <Link to="/stream">Lives</Link>
            <Link to="/contact">Contact us</Link>

            {user ? (
              <>
                <Button color="inherit">Hi, {user.username}</Button>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => setLoginOpen(true)}>
                  Login
                </Button>
                <Button color="inherit" onClick={() => setSignupOpen(true)}>
                  Sign Up
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>

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
