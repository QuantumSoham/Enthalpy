import React from 'react';
import './LeaderComponent.css';

const LeaderComponent = ({ imagePath, name, description }) => {
  return (
    <div className="leader-section">
      <h1 className="heading">Meet the Lead</h1>
      <div className="leader-card">
        <img className="leader-image" src={imagePath} alt={`${name}'s portrait`} />
        <h2 className="leader-name">{name}</h2>
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="leader-description">{description}</p>
      </div>
    </div>
  );
};

export default LeaderComponent;
