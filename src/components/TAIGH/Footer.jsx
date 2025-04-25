import React from "react";
import { Typography, Box } from "@mui/material";
import "./Footer.scss";

const Footer = () => (
  <Box className="footer">
    <Typography align="center">
      &copy; {new Date().getFullYear()} TAIGH | AAAI Fall Symposium
    </Typography>
  </Box>
);

export default Footer;
