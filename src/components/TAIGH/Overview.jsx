import React from "react";
import { Container, Typography } from "@mui/material";
import "./Overview.scss";

const OverviewPage = () => {
  return (
    <section className="overview-section">
      <Container maxWidth="md">
        <Typography variant="h3" className="overview-title">
          Symposium Overview
        </Typography>
        <Typography className="overview-text">
          The TAIGH Symposium serves as a vital platform to explore how
          artificial intelligence can be applied equitably to address global
          health challenges. With a multidisciplinary approach, the symposium
          invites participants from technology, public health, academia, and
          policy to share research, engage in thought-provoking discussions, and
          develop forward-thinking solutions.
        </Typography>
        <Typography className="overview-text">
          This year’s focus is on fairness, transparency, and inclusivity in AI
          systems that impact health outcomes. Discussions will emphasize
          real-world deployments, policy implications, and technological
          innovations that aim to close healthcare gaps.
        </Typography>
      </Container>
    </section>
  );
};

export default OverviewPage;
