import React, { useState } from "react";
import "./Trainees.scss";
import { Typography, Box, Tabs, Tab, Avatar } from "@mui/material";
import defaultProfileImage from "../assets/images/defaultProfile.png"; // Placeholder for missing images
import richard from "../assets/images/richard.jpg";
import kushalB from "../assets/images/kushalB.jpg";
import kushal from "../assets/images/kalyan.jpg";
import sam from "../assets/images/sam.jpeg";
import alexis from "../assets/images/alexis.jpg";

const traineesData = {
  undergraduate: [
    {
      name: "Smith Evan",
      image: defaultProfileImage,
    },
    {
      name: "Holland Laila",
      image: defaultProfileImage,
    },
    {
      name: "Cross Jeremy",
      image: defaultProfileImage,
    },
    {
      name: "Green Justin",
      image: defaultProfileImage,
    },
    {
      name: "Revies Willie",
      image: defaultProfileImage,
    },
    {
      name: "Jeffries Jordan",
      image: defaultProfileImage,
    },
    {
      name: "Arellano Romero Brenda",
      image: defaultProfileImage,
    },
    {
      name: "Faulkner Everett",
      image: defaultProfileImage,
    },
    {
      name: "Marshall Kyeesha",
      image: defaultProfileImage,
    },
    {
      name: "Jones Mackenzie",
      image: defaultProfileImage,
    },
    {
      name: "Okoro Chidi",
      image: defaultProfileImage,
    },
    {
      name: "Khamvanthong Hannah",
      image: defaultProfileImage,
    },
    {
      name: "Velazco Daniel",
      image: defaultProfileImage,
    },
    {
      name: "Pierce Symphony",
      image: defaultProfileImage,
    },
    {
      name: "Powell Jalen",
      image: defaultProfileImage,
    },
    {
      name: "Agboglo Matthew",
      image: defaultProfileImage,
    },
    {
      name: "Ruff Jaden",
      image: defaultProfileImage,
    },
    {
      name: "Horton Jeremiah",
      image: defaultProfileImage,
    },
    {
      name: "Mitchell Caleb",
      image: defaultProfileImage,
    },
    {
      name: "Johnson Sidney",
      image: defaultProfileImage,
    },
    {
      name: "Zaria Pittman",
      image: defaultProfileImage,
    },
  ],
  graduate: [
    {
      name: "Richard Annan (PhD)",
      image: richard,
    },
    {
      name: "Hailemicael Lulseged Yimer (PhD)",
      image: defaultProfileImage,
    },
    {
      name: "Zhiwen He (PhD)",
      image: defaultProfileImage,
    },
    {
      name: "Hamza Khan (PhD)",
      image: defaultProfileImage,
    },
    {
      name: "Kushal Kalyan (Master)",
      image: kushal,
    },
    {
      name: "Kushal Badal (Master)",
      image: kushalB,
    },
    {
      name: "Maxwell Sam (Master)",
      image: sam,
    },
    {
      name: "Alexis Cathcart (Master)",
      image: alexis,
    },
    {
      name: "Bader Alwomi Aljabali",
      image: defaultProfileImage,
    },
    {
      name: "Joseph Shelton",
      image: defaultProfileImage,
    },
  ],
};

const Trainees = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="trainees">
      <Typography
        variant="h4"
        style={{ marginBottom: "1rem", fontWeight: 600, textAlign: "center" }}
      >
        Trainees
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        className="trainees-tabs"
      >
        <Tab label="Undergraduate Students" />
        <Tab label="Graduate Students" />
      </Tabs>
      <div className="trainees-list">
        {selectedTab === 0 && (
          <Box className="trainees-section">
            <Typography
              variant="h5"
              style={{ marginBottom: "1rem", fontWeight: 500 }}
            >
              Undergraduate Students
            </Typography>
            <ul>
              {traineesData.undergraduate.map((student, index) => (
                <li key={index} className="trainee-item">
                  <Avatar
                    src={student.image}
                    alt={student.name}
                    className="trainee-avatar"
                  />
                  <span>{student.name}</span>
                </li>
              ))}
            </ul>
          </Box>
        )}
        {selectedTab === 1 && (
          <Box className="trainees-section">
            <Typography
              variant="h5"
              style={{ marginBottom: "1rem", fontWeight: 500 }}
            >
              Graduate Students
            </Typography>
            <ul>
              {traineesData.graduate.map((student, index) => (
                <li key={index} className="trainee-item">
                  <Avatar
                    src={student.image}
                    alt={student.name}
                    className="trainee-avatar"
                  />
                  <span>{student.name}</span>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Trainees;
