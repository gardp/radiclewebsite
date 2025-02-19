import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import './App.css';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (

      <Router>
        <div className="app-container">
        <CustomNavbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>

  );
}

export default App;