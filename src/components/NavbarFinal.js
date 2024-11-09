import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavbarFinal.css';
import App from '/Users/suman/Desktop/Enthalpy/Website/Enthalpy_Website/src/App.js';

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the home route
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

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
        <Link to="/" onClick={handleLogoClick}>
          <img src={`${process.env.PUBLIC_URL}/enthalpyLogo.png`} alt="Logo" />
        </Link>
      </div>
      <ul className="menu">
        <li className="dropdown">
          <button className="dropbtn">PROJECTS</button>
          <ul className="dropdown-content">
            <li><Link to="/meet-the-team#blackhawk">BLACK HAWK</Link></li>
            <li><Link to="/meet-the-team#hornet">HORNET</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <button className="dropbtn">DEPARTMENTS</button>
          <ul className="dropdown-content">
            <li className="submenu">
              <Link to="/meet-the-team#electronics">ELECTRONICS</Link>
              <ul className="submenu-content">
                <li><Link to="/meet-the-team#electronics-avionics">AVIONICS</Link></li>
                <li><Link to="/meet-the-team#electronics-payload">PAYLOAD</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="/meet-the-team#mechanical">MECHANICAL</Link>
              <ul className="submenu-content">
                <li><Link to="/meet-the-team#mechanical-aerodynamics">AERODYNAMICS AND AIRFRAME</Link></li>
                <li><Link to="/meet-the-team#mechanical-propulsion">PROPULSION</Link></li>
                <li><Link to="/meet-the-team#mechanical-recovery">RECOVERY</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="/meet-the-team#management">MANAGEMENT</Link>
              <ul className="submenu-content">
                <li><Link to="/meet-the-team#management-marketing">MARKETING</Link></li>
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
