import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // State to control when to show the main content
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Adding a timeout to allow the animation to complete before showing the content
    setTimeout(() => {
      setShowContent(true);
    }, 3000); // The message disappears after 3 seconds
  }, []);

  return (
    <div className="App">
      {/* Initial landing page with the "Hello, Welcome to my portfolio" message */}
      {!showContent && (
        <div className="welcome-message">
          <h1>Hello, Welcome to my portfolio</h1>
        </div>
      )}

      {/* Main content of the website, shown after the animation */}
      <div className={`main-content ${showContent ? 'show' : ''}`}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
