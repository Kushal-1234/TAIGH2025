import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar
    position="static"
    style={{ background: "#203a43", position: "sticky", top: 0, zIndex: 999 }}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        TAIGH
      </Typography>
      <Box>
        {[
          "/",
          "/importantDates",
          // "/overview",
          "/speakers",
          // "/submission",
          "/schedule",
          // "/contact",
        ].map((path, i) => (
          <Button key={i} color="inherit" component={Link} to={path}>
            {path === "/"
              ? "Home"
              : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
