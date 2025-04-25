// index.js or App.js (entry point)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/TAIGH/Navbar";
import HomePage from "./components/TAIGH/HomePage";
import Footer from "./components/TAIGH/Footer";
import OverviewPage from "./components/TAIGH/Overview";
import SpeakersPage from "./components/TAIGH/Speakers";
import ImportantDatesPage from "./components/TAIGH/ImportantDates";
import SchedulePage from "./components/TAIGH/Schedule";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/overview" element={<OverviewPage />} /> */}
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/importantDates" element={<ImportantDatesPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        {/*  <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
