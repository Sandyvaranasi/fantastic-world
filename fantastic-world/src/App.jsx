import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bangles from '../components/Bangles';
import Gift from '../components/Gift';
import Homepage from '../components/Homepage';
import Intro from '../components/Intro';
import Jwellary from '../components/Jwellary';
import Navbar from '../components/Navbar';
import Stationary from '../components/Stationary';
import Worship from '../components/Worship';
import './App.css';
import Contact from '../components/Contact';
import Category from '../components/Category';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/offer" element={<Homepage />} />
        <Route path="/jwellary" element={<Jwellary />} />
        <Route path="/bangle" element={<Bangles />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </Router>
  );
}

export default App;
