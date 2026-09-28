import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MainLayout() {
  const { currentTheme } = useTheme();

  return (
    <div style={{ backgroundColor: currentTheme.bg, color: currentTheme.textMain }} className="min-h-screen transition-colors duration-500 font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}