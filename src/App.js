// index.js or App.js (entry point)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
/*import Navbar from "./components/TAIGH/Navbar";
import HomePage from "./components/TAIGH/HomePage";
import Footer from "./components/TAIGH/Footer";
import OverviewPage from "./components/TAIGH/Overview";
import SpeakersPage from "./components/TAIGH/Speakers";
import ImportantDatesPage from "./components/TAIGH/ImportantDates";
import SchedulePage from "./components/TAIGH/Schedule";*/
import HomePage from './components/SURE-AI4H/HomePage';
import Navbar from './components/SURE-AI4H/Navbar';
import ImportantDatesPage from './components/SURE-AI4H/ImportantDates';
import SpeakersPage from "./components/SURE-AI4H/Speakers";
import SchedulePage from "./components/SURE-AI4H/Schedule";
import Footer from './components/SURE-AI4H/Footer';

const App = () => {
  return (
    <Router>
      {/*
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/overview" element={<OverviewPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/importantDates" element={<ImportantDatesPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        {/*  <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/importantDates' element={<ImportantDatesPage />} />
        <Route path='/speakers' element={<SpeakersPage />} />
        <Route path='/schedule' element={<SchedulePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;