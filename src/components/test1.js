import React from 'react';
import './AvionicsSection.css';

const AvionicsSection = ({ heading, text, numBoxes }) => {
  return (
    <div className="avionics-bay">
      <div className="w-container">
        <h1 className="heading">{heading}</h1>
        <p className="description">{text}</p>
        <div className="box-container">
          {Array.from({ length: numBoxes }, (_, index) => (
            <div className="box" key={index}>
              <img 
                src="/path-to-image-placeholder" 
                alt={`Rocket placeholder ${index + 1}`} 
                className="box-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvionicsSection;
