import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="home-section">
      <motion.div
        className="hero-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="md" className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Trustworthy AI for Global Health
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AAAI Fall Symposium 2025 | Building a Fairer, Healthier World with
            AI
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Button
              variant="contained"
              color="secondary"
              href="/submission"
              className="cta-button"
            >
              Submit Your Proposal
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <Container className="overview-content">
        <motion.div
          className="info-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="info-title">
            About AAAI
          </Typography>
          <Typography className="info-text">
            The Association for the Advancement of Artificial Intelligence
            (AAAI) is the premier scientific society dedicated to advancing the
            scientific understanding of the mechanisms underlying thought and
            intelligent behavior and their embodiment in machines. Founded in
            1979, AAAI is a nonprofit devoted to the safe and beneficial
            development of AI.
          </Typography>
        </motion.div>

        <motion.div
          className="info-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="info-title">
            Mission & Vision
          </Typography>
          <Typography className="info-text">
            <strong>Mission:</strong> Advance and integrate safe and responsible
            AI to benefit society. <br />
            <strong>Vision:</strong> Humanity thriving, empowered by AI.
          </Typography>
        </motion.div>

        <motion.div
          className="info-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="info-title">
            Core Values
          </Typography>
          <ul className="styled-list">
            <li>
              <strong>Leadership:</strong> Guiding the profession forward as
              trusted thought leaders in AI.
            </li>
            <li>
              <strong>Integrity:</strong> Being honest, ethical, and accountable
              in all actions and decisions.
            </li>
            <li>
              <strong>Transparency:</strong> Operating openly and sharing
              information clearly with stakeholders.
            </li>
            <li>
              <strong>Trust:</strong> Building reliability and credibility
              through consistent research and behavior.
            </li>
            <li>
              <strong>Excellence:</strong> Striving for the highest standards in
              all activities and services.
            </li>
            <li>
              <strong>Inclusive:</strong> Welcoming and valuing diverse
              perspectives and participants.
            </li>
            <li>
              <strong>Multidisciplinary:</strong> Embracing and integrating
              multiple disciplines and expertise.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="info-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="info-title">
            AAAI Goals
          </Typography>
          <ul className="styled-list">
            <li>
              Promoting research in, and responsible use of, artificial
              intelligence
            </li>
            <li>Increasing public understanding of artificial intelligence</li>
            <li>Improving the teaching and training of AI practitioners</li>
            <li>
              Guiding research planners and funders on key AI developments
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="info-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="info-title">
            Activities
          </Typography>
          <ul className="styled-list">
            <li>Organizing conferences, symposia, and workshops</li>
            <li>Publishing AI Magazine and conference proceedings</li>
            <li>Running educational programs and governmental outreach</li>
            <li>Awarding grants and scholarships globally</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomePage;
