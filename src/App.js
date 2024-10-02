import React from 'react';
import './App.css';
import Navbar from './components/NavbarTest'
import Footer from './components/Footer'
import { createBrowserRouter } from 'react-router-dom';

import ThreeScene from './components/ThreeScene';
// import ModelViewer from '../src/components/ModelViewer'; 
function App() {
  return (
    <>
      <Navbar className="Nav"/>
      <div></div>
      <div className="FirstPage">
        <div className="FirstPageContent">
              <span className="Enthalpytxt">ENTHALPY</span>
              <button className="hover-button" onClick={()=>{ window.location.href = 'https://www.youtube.com'}}>
                Meet The Team
              </button>
        </div>
      </div>
      <div className="SecondPage">
        <div className='threeModel'>
             <ThreeScene />
        </div>
        <div className='Stats'>
              <p>Burn Rate:</p>
              <p>Fuel Capacity:</p>
              <p>Thrust:</p>
        </div>
      </div>
      
      {/* <Footer className='Footer'
          line16="/line-16.png"
          instaIcon="/insta-icon.png"
          linkedinIcon="/linkedin-icon.png"
          xIcon="/x-icon.png"
          image2="/image-2.png"
          vitLogo1="/vit-logo.png"
        /> */}
        <Footer className="custom-footer-class" />
    </>
    
  );
}

export default App;
