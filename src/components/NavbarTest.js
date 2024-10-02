import React from 'react';
import './NavbarTest.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="menu">
        <li className="dropdown">
          <button className="dropbtn">Projects</button>
          <ul className="dropdown-content">
            <li><a href="#blackhawk">Black Hawk</a></li>
            <li><a href="#hornet">Hornet</a></li>
            <li><a href="#test">Test</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Department</button>
          <ul className="dropdown-content">
            <li className="submenu">
              <a href="#department1">Electronics</a>
              <ul className="submenu-content">
                <li><a href="#subdepartment1.1">Sub Department 1.1</a></li>
                <li><a href="#subdepartment1.2">Sub Department 1.2</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#department2">Mechanical</a>
              <ul className="submenu-content">
                <li><a href="#subdepartment2.1">Sub Department 2.1</a></li>
                <li><a href="#subdepartment2.2">Sub Department 2.2</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <button className="contact-us">Contact Us</button>
    </nav>
  );
}

export default Navbar;
