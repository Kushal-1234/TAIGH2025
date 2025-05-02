import React from "react";
import { Typography, Box } from "@mui/material";
import "./Footer.scss";

const Footer = () => (
  <Box className="footer">
    <Typography align="center">
      &copy; {new Date().getFullYear()} SURE-AI4H | AAAI Fall Symposium
    </Typography>
  </Box>
);

export default Footer;
