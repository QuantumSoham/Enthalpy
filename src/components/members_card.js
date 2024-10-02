import React from 'react';
import './members_card.css';

const AvionicsSection = ({ class1, heading, text, numBoxes,desc }) => {
  return (
    <div className={`avionics-bay w-layout-blockcontainer w-container ${class1}`}>
      <div className="div-block-2">
        <h1 className="heading-2">{heading}</h1>
        <div className="div-block-3">
          <div className="div-block-6"></div>
          <div className="text-block-6">{desc}</div>
         
          <div className="div-block-6"></div>
        </div>
      </div>
      <p className="paragraph">{text}</p>
      <div className="w-layout-hflex container-6" id='FlexBoxmain'>
        {Array.from({ length: numBoxes }, (_, index) => (
          <div key={index} className="div-block-7">
            <img
              src="./Spaceship_Vectors-Wrapper.svg"
              alt={`Placeholder ${index + 1}`}
              className="vectors-wrapper-7"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvionicsSection;
