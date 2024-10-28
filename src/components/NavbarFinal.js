import React from 'react';
import './NavbarFinal.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/enthalpyLogo.png`} alt="Logo" />
      </div>
      <ul className="menu">
        <li className="dropdown">
          <button className="dropbtn">PROJECTS</button>
          <ul className="dropdown-content">
            <li><a href="#blackhawk">Black Hawk</a></li>
            <li><a href="#hornet">Hornet</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <button className="dropbtn">DEPARTMENTS</button>
          <ul className="dropdown-content">
            <li className="submenu">
              <a href="#electronics">Electronics</a>
              <ul className="submenu-content">
                <li><a href="#subdepartment1">Sub Department 1</a></li>
                <li><a href="#subdepartment2">Sub Department 2</a></li>
                <li><a href="#subdepartment3">Sub Department 3</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#mechanical">Mechanical</a>
              <ul className="submenu-content">
                <li><a href="#subdepartment1">Sub Department 1</a></li>
                <li><a href="#subdepartment2">Sub Department 2</a></li>
                <li><a href="#subdepartment3">Sub Department 3</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#management">Management</a>
              <ul className="submenu-content">
                <li><a href="#subdepartment1">Sub Department 1</a></li>
                <li><a href="#subdepartment2">Sub Department 2</a></li>
                <li><a href="#subdepartment3">Sub Department 3</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <button className="contact-us" onClick={() => window.location.href = '/contact'}>CONTACT US</button>
    </nav>
  );
}

export default Navbar;
