import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import SoftwareSection from './components/SoftwareSection';
import ProcurementSection from './components/ProcurementSection';
import TrainingSection from './components/TrainingSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Solutions />
        <SoftwareSection />
        <ProcurementSection />
        <TrainingSection />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
