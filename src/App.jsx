import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
