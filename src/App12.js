import React from 'react';
import AvionicsSection from './components/members_card';
import LeaderPage from './components/LeaderPage';
import Banner from './components/Banner';
import './App.css'
function App() {
  return (
    <>
    <div id="FirstPage">
      <div id="titletext">
        ENTHALPY
      </div>
    </div>
    <div className="electronics">
      
      <Banner 
  department="ELECTRONICS" 
  
  text="Welcome to the Electronics Department" 
/>

      <LeaderPage
          departmentName="MEET THE LEAD"
          imageSrc="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b760ac91ddd03e82bf4d42_image-16.png"
          leaderName="SHREE VIDHYA"
          description="Meet Shree Vidya, the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          
        />
      <AvionicsSection
        class1="Electronics1"
        heading="AVIONICS"
        text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
        numBoxes={5}  
      />
      <div styles="height:10vh;"></div>
      <AvionicsSection
        class1="Electronics2"
        heading="AVIONICS"
        text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
        numBoxes={7}  
        desc="BRAIN BEHIND THE FLIGHT"
      />
    </div>
    <div className="electronics">
      
      <Banner 
  department="MECHANICAL" 
  
  text="Welcome to the Mechanical Department" 
/>

      <LeaderPage
          departmentName="MEET THE LEAD"
          imageSrc="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b760ac91ddd03e82bf4d42_image-16.png"
          leaderName="SHREE VIDHYA"
          description="Meet Shree Vidya, the Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          
        />
      <AvionicsSection
        class1="Mechanical1"
        heading="AERODYNAMICS & AIRFRAME"
        text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
        desc="The Skeleton and the Skin"
        numBoxes={5}  
      />
      <div styles="height:10vh;"></div>
      <AvionicsSection
        class1="Mechanical2"
        heading="PROPULSION"
        text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
        numBoxes={7}  
        desc="The Powerhouse"
      />
      <AvionicsSection
        class1="Mechanical3"
        heading="RECOVERY"
        text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
        numBoxes={7}  
        desc="Form Launch to Retrieval"
      />
    </div>
    <div className="electronics">
      
      <Banner 
  department="MANAGEMENT" 
  
  text="Welcome to the Management Department" 
/>

      <LeaderPage
          departmentName="MEET THE LEAD"
          imageSrc="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b760ac91ddd03e82bf4d42_image-16.png"
          leaderName="SHREE VIDHYA"
          description="Meet Shree Vidya, the Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          
        />
      <AvionicsSection
        class1="Management1"
        heading="MARKETTING"
        text="Step into the heart of Enthalpy's avionics department, where innovation meets precision in crafting the brains of our rockets. From cutting-edge flight computers to intricate telemetry systems, these engineers ensure our rockets soar safely and gather critical data for analysis. They are the architects of our journey to engineering excellence and successful launches."
        desc="The Voice"
        numBoxes={5}  
      />
    </div>

    </>
  );
}

export default App;
