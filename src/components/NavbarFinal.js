import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavbarFinal.css';

function Navbar() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/'); // Navigate to the home route
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Delay to ensure navigation completes before scrolling
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/enthalpyLogo.png`} alt="Logo" />
      </div>
      <ul className="menu">
        <li className="dropdown">
          <button className="dropbtn">PROJECTS</button>
          <ul className="dropdown-content">
            <li><Link to="/meet-the-team#blackhawk">Black Hawk</Link></li>
            <li><Link to="/meet-the-team#hornet">Hornet</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <button className="dropbtn">DEPARTMENTS</button>
          <ul className="dropdown-content">
            <li className="submenu">
              <Link to="/meet-the-team#electronics">Electronics</Link>
              <ul className="submenu-content">
                <li><Link to="/meet-the-team#electronics-avionics">Avionics</Link></li>
                <li><Link to="/meet-the-team#electronics-payload">Payload</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="/meet-the-team#mechanical">Mechanical</Link>
              <ul className="submenu-content">
                <li><Link to="/meet-the-team#mechanical-aerodynamics">Aerodynamics & Airframe</Link></li>
                <li><Link to="/meet-the-team#mechanical-propulsion">Propulsion</Link></li>
                <li><Link to="/meet-the-team#mechanical-recovery">Recovery</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="/meet-the-team#management">Management</Link>
              <ul className="submenu-content">
                <li><Link to="/meet-the-team#management-marketing">Marketing</Link></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <button className="contact-us" onClick={handleContactClick}>CONTACT US</button>
    </nav>
  );
}

export default Navbar;
