import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavbarFinal';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import MeetTheTeam from './MeetTheTeam.js'; // Import your MeetTheTeam component

function App() {
  const [firstPageVisible, setFirstPageVisible] = useState(true);
  const [secondPageVisible, setSecondPageVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight / 2) {
        setFirstPageVisible(true);
        setSecondPageVisible(false);
        setFooterVisible(false);
      } else if (scrollPosition < windowHeight * 1.5) {
        setFirstPageVisible(false);
        setSecondPageVisible(true);
        setFooterVisible(false);
      } else {
        setFirstPageVisible(false);
        setSecondPageVisible(false);
        setFooterVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Navbar className="Nav" />
      <div className="Nav-place"></div>
      <Routes>
        <Route path="/" element={
          <>
            <div className={`FirstPage ${firstPageVisible ? 'visible' : 'hidden'}`}>
              <div className="FirstPageContent">
                <Link to="/meet-the-team">
                  <button className="hover-button">
                    Meet The Team
                  </button>
                </Link>
              </div>
            </div>
            <div className={`SecondPage ${secondPageVisible ? 'visible' : 'hidden'}`}>
              <div className='threeModel'>
                <ThreeScene />
              </div>
              <div className='Stats'>
                <p>Burn Rate:</p>
                <p>Fuel Capacity:</p>
                <p>Thrust:</p>
              </div>
            </div>
            <div id="contact"></div>
            <Footer className={`custom-footer-class ${footerVisible ? 'visible' : 'hidden'}`} />
          </>
        } />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
