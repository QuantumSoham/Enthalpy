import React from 'react';
import './LeaderPage.css';

const LeaderPage = ({departmentName, imageSrc, leaderName, description, className}) => {
  return (
    <div className= {`lead w1-layout-blockcontainer w1-container ${className}`}>
      <h3 className="heading">{departmentName}</h3>
      <div className="w1-layout-hflex flex-block-4">
        <div className="w1-layout-blockcontainer container-7 w1-container">
          <img
            src={imageSrc}
            loading="lazy"
            width="180"
            height="150"
            alt="Leader"
            className="image-16"
          />
          <div className="text">{leaderName}</div>
          <div className="icon-group">
            <div className="insta-icon">
              <img
                src="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b44fda766307539865246c_Vectors-Wrapper.svg"
                loading="lazy"
                width="25"
                height="25"
                alt="Instagram"
                className="vectors-wrapper"
              />
            </div>
            <div className="linkedin-icon">
              <img
                src="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b44fdb0478d4f897658e7d_Vectors-Wrapper.svg"
                loading="lazy"
                width="35"
                height="35"
                alt="LinkedIn"
                className="vectors-wrapper-4"
              />
            </div>
            <div className="x-icon">
              <img
                src="https://cdn.prod.website-files.com/66b38761ce07ceedccc7904b/66b44fdcd574832b2ecf5e24_Vectors-Wrapper.svg"
                loading="lazy"
                width="28"
                height="26"
                alt="X"
                className="vectors-wrapper-5"
              />
            </div>
          </div>
        </div>
        <p className="paragraph-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LeaderPage;
