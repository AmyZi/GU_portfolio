import React from 'react';
import {  HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';
import AcademicDashboard from './pages/StudyPage';


const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/study" element={<AcademicDashboard />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
export default App;