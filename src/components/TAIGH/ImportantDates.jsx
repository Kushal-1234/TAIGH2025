import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./ImportantDates.scss";

const highlightPhrases = (text) => {
  const highlights = [
    "Papers and abstracts are due",
    "Online registration opens",
    "AAAI Author Kit",
    "submission of position papers",
    "Submission deadline is August 16",
    "double-blind review format",
    "single-blind review",
    "Submissions include",
    "Acceptance/Rejection letters",
    "Camera-ready copy due",
    "Early registration ends",
    "Late registration begins",
    "Program schedule available",
    "Fall Symposium Series",
    "Symposium reports",
    "Example position papers",
    "Example short research paper",
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
    date: "August 9 (2)",
    details: [
      "Papers and abstracts are due on EasyChair.",
      "Online registration opens.",
      "Submitted work should use the AAAI Author Kit.",
      "AAAI MI4EGH invites the submission of position papers that are thought-provoking. Join us in a dialogue to advance AI for equitable global health. Submission deadline is August 16.",
      "We are aware that AAAI author kit uses double-blind review format. MI4EGH recommends single-blind review, but feel free to choose the double-blind review format if you prefer.",
      "Submissions include full papers (6–8 pages), position/short/poster papers (2–4 pages), and extended abstracts (1–2 pages) that can include ongoing research, surveys, opinions, and perspectives. Reference pages do not count towards the page limits.",
      "Example position papers: Alm24; Bass-Weiber24",
      "Example short research paper: Chuang-Huang24",
    ],
  },
  {
    date: "August 16–23",
    details: [
      "Acceptance/Rejection letters sent to participants, including allotted page lengths:",
      "6–8 pages for full papers;",
      "2–4 pages for posters and short/position papers; and",
      "2 pages for extended abstracts.",
    ],
  },
  {
    date: "August 30",
    details: ["Camera-ready copy due."],
  },
  {
    date: "September 6",
    details: [
      "AV and Poster needs, Schedule Request Form, and Poster Request Form due.",
    ],
  },
  {
    date: "October 4",
    details: ["Early registration ends. Late registration begins."],
  },
  {
    date: "October 18",
    details: ["Program schedule available on the website."],
  },
  {
    date: "October 31",
    details: [
      "AAAI sends general information email to all registered FSS-24 participants, including details on location, registration, and ground transportation.",
    ],
  },
  {
    date: "November 7 – 9",
    details: [
      "Fall Symposium Series at Westin Arlington Gateway, Arlington, VA, USA.",
    ],
  },
  {
    date: "December 13",
    details: ["Symposium reports of 400–700 words for AI Magazine due."],
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
