import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./Schedule.scss";

const eventSchedule = [
  {
    day: "Day 1 - November 6, 2025",
    events: [],
    /*events: [
      { time: "8:00 - 9:15 AM", detail: "Registration" },
      {
        time: "9:30 - 10:15 AM",
        detail: "Kickoff for [Event Name] - [Speaker Name]",
      },
      { time: "10:15 - 11:00 AM", detail: "[Talk Name] - [Speaker Name]" },
      { time: "11:00 - 11:30 AM", detail: "Break" },
      { time: "11:30 - 12:00 PM", detail: "[Talk Name] - [Speaker Name]" },
      {
        time: "12:00 - 12:30 PM",
        detail: "Title of activity - Name of activity lead",
      },
      { time: "12:30 - 1:00 PM", detail: "Title of talk - Name of speaker" },
      { time: "1:00 - 2:00 PM", detail: "Lunch" },
      { time: "2:00 - 2:30 PM", detail: "[Talk Name] - [Speaker Name]" },
      { time: "2:30 - 3:00 PM", detail: "[Talk Name] - [Speaker Name]" },
      { time: "3:00 - 4:00 PM", detail: "Break" },
      { time: "4:00 - 4:30 PM", detail: "[Talk Name] - [Speaker Name]" },
      { time: "4:30 - 5:00 PM", detail: "[Talk Name] - [Speaker Name]" },
      { time: "6:00 - 9:00 PM", detail: "Party at [Venue Name]" },
    ],*/
  },
  {
    day: "Day 2 - November 7, 2025",
    events: [],
  },
  {
    day: "Day 3 - November 8, 2025",
    events: [],
  },
];

const SchedulePage = () => {
  return (
    <motion.section
      className="schedule-agenda-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Typography
          variant="h4"
          style={{
            marginBottom: "1rem",
            fontWeight: 600,
            fontSize: "36px",
            textAlign: "center",
          }}
        >
          Symposium Schedule
        </Typography>
        <div className="agenda-list">
          {eventSchedule.map((day, index) => (
            <Box
              key={index}
              className="agenda-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Typography variant="h6" className="agenda-time">
                {day.day}
              </Typography>
              <div className="session-list">
                {day.events.length > 0 ? (
                  day.events.map((event, i) => (
                    <Box
                      key={i}
                      className="session-item"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <Typography variant="body2">
                        <strong>{event.time}:</strong> {event.detail}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" style={{ marginTop: "10px" }}>
                    No events currently scheduled.
                  </Typography>
                )}
              </div>
            </Box>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default SchedulePage;