import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./ImportantDates.scss";

const highlightPhrases = (text) => {
  const highlights = [
    'Proposals are due',
    'acceptance or rejection',
    'Fall 2025 Symposium Series',
  ];

  let formatted = text;
  highlights.forEach((phrase) => {
    const regex = new RegExp(`(${phrase})`, "gi");
    formatted = formatted.replace(regex, "<strong>$1</strong>");
  });

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
};

const importantDates = [
  {
    date: 'May 27, 2025',
    details: [
      'Proposals are due to the AAAI via EasyChair.',
    ],
  },
  {
    date: 'June 16, 2025',
    details: [
      'Notification of acceptance or rejection.',
    ],
  },
  {
    date: 'November 6 - 8, 2025',
    details: [
      'Fall 2025 Symposium Series at Western Arlington Gateway, Arlington, VA, USA.',
    ],
  },
];

const ImportantDatesPage = () => {
  return (
    <motion.section
      className="workshop-agenda-page"
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
          Important Dates
        </Typography>
        <div className="agenda-list">
          {importantDates.map((entry, index) => (
            <Box
              key={index}
              className="agenda-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Typography variant="h6" className="agenda-time">
                {entry.date}
              </Typography>
              <div className="session-list">
                {entry.details.map((detail, i) => (
                  <Box
                    key={i}
                    className="session-item"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <Typography variant="body2">
                      {highlightPhrases(detail)}
                    </Typography>
                  </Box>
                ))}
              </div>
            </Box>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default ImportantDatesPage;