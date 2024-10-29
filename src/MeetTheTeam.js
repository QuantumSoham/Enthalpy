import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AvionicsSection from './components/members_card';
import LeaderPage from './components/LeaderPage';
import Banner from './components/Banner';
import './MeetTheTeam.css';

function MeetTheTeam() {
  const location = useLocation();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div id="FirstPage" className="fade-in" ref={(el) => sectionsRef.current[0] = el}>
        <div id="titletext">
          ENTHALPY
        </div>
      </div>
      <div className="electronics fade-in" id="electronics" ref={(el) => sectionsRef.current[1] = el}>
        <Banner 
          department="ELECTRONICS" 
          text="Welcome to the Electronics Department" 
        />
        <div id="electronics-leader">
          <LeaderPage
            departmentName="MEET THE LEAD"
            imageSrc="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b760ac91ddd03e82bf4d42_image-16.png"
            leaderName="SHREE VIDHYA"
            description="Meet Shree Vidya, the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
        <div id="electronics-avionics">
          <AvionicsSection
            class1="Electronics1"
            heading="AVIONICS"
            text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
            numBoxes={5}  
          />
        </div>
        <div style={{ height: '10vh' }}></div>
        <div id="electronics-payload">
          <AvionicsSection
            class1="Electronics2"
            heading="PAYLOAD"
            text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
            numBoxes={7}  
            desc="BRAIN BEHIND THE FLIGHT"
          />
        </div>
      </div>
      <div className="electronics fade-in" id="mechanical" ref={(el) => sectionsRef.current[2] = el}>
        <Banner 
          department="MECHANICAL" 
          text="Welcome to the Mechanical Department" 
        />
        <div id="mechanical-lead">
          <LeaderPage
            departmentName="MEET THE LEAD"
            imageSrc="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b760ac91ddd03e82bf4d42_image-16.png"
            leaderName="SHREE VIDHYA"
            description="Meet Shree Vidya, the Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          />
        </div>
        <div id="mechanical-aerodynamics">
          <AvionicsSection
            class1="Mechanical1"
            heading="AERODYNAMICS & AIRFRAME"
            text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
            desc="The Skeleton and the Skin"
            numBoxes={5} 
          />
        </div>
        <div style={{ height: '10vh' }}></div>
        <div id="mechanical-propulsion">
          <AvionicsSection
            class1="Mechanical2"
            heading="PROPULSION"
            text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
            numBoxes={7}  
            desc="The Powerhouse"
          />
        </div>
        <div id="mechanical-recovery">
          <AvionicsSection
            class1="Mechanical3"
            heading="RECOVERY"
            text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
            numBoxes={7}  
            desc="Form Launch to Retrieval"
          />
        </div>
      </div>
      <div className="electronics fade-in" id="management" ref={(el) => sectionsRef.current[3] = el}>
        <Banner 
          department="MANAGEMENT" 
          text="Welcome to the Management Department" 
        />
        <div id="management-lead">
          <LeaderPage
            departmentName="MEET THE LEAD"
            imageSrc="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b760ac91ddd03e82bf4d42_image-16.png"
            leaderName="SHREE VIDHYA"
            description="Meet Shree Vidya, the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
        <div id="management-marketing">
          <AvionicsSection
            class1="Management1"
            heading="MARKETING"
            text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
            desc="The Voice"
            numBoxes={5}  
          />
        </div>
      </div>
    </>
  );
}

export default MeetTheTeam;
