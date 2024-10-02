import React from 'react';
import './Banner.css';

const Banner = ({ department, text }) => {
  return (
    <div className="banner w-layout-blockcontainer w-container">
      <div className="banner-text">{department}</div>
      
    </div>
    
  );
};

export default Banner;


