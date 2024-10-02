// import React, { useState } from 'react';
// import './Navbar.css'; // Import the CSS file for styling

// const Navbar = () => {
//   const [projectDropdown, setProjectDropdown] = useState(false);
//   const [departmentDropdown, setDepartmentDropdown] = useState(false);

//   const handleProjectHover = () => {
//     setProjectDropdown(!projectDropdown);
//   };

//   const handleDepartmentHover = () => {
//     setDepartmentDropdown(!departmentDropdown);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Logo</div>
//       <div className="navbar-menu">
//         <div 
//           className="navbar-item" 
//           onMouseEnter={handleProjectHover} 
//           onMouseLeave={handleProjectHover}
//         >
//           Project
//           {projectDropdown && (
//             <div className="dropdown">
//               <div className="dropdown-item">Project 1</div>
//               <div className="dropdown-item">Project 2</div>
//               <div className="dropdown-item">Project 3</div>
//             </div>
//           )}
//         </div>
//         <div 
//           className="navbar-item" 
//           onMouseEnter={handleDepartmentHover} 
//           onMouseLeave={handleDepartmentHover}
//         >
//           Department
//           {departmentDropdown && (
//             <div className="dropdown">
//               <div className="dropdown-item">Department 1</div>
//               <div className="dropdown-item">Department 2</div>
//               <div className="dropdown-item">Department 3</div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="navbar-contact">
//         <a href="/contact" className="contact-button">Contact Us</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [projectItems, setProjectItems] = useState(['Black-Hawk', 'Hornet','Test']);
//   const [departmentItems, setDepartmentItems] = useState(['Department 1', 'Department 2']);
//   const [showProjectDropdown, setShowProjectDropdown] = useState(false);
//   const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

//   const addProjectItem = () => {
//     setProjectItems([...projectItems, `Project ${projectItems.length + 1}`]);
//   };

//   const addDepartmentItem = () => {
//     setDepartmentItems([...departmentItems, `Department ${departmentItems.length + 1}`]);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Logo</div>
//       <div className="menu">
//         <div 
//           className="dropdown" 
//           onMouseEnter={() => setShowProjectDropdown(true)} 
//           onMouseLeave={() => setShowProjectDropdown(false)}
//         >
//           <button className="dropbtn">Project</button>
//           {showProjectDropdown && (
//             <div className="dropdown-content">
//               {projectItems.map((item, index) => (
//                 <div key={index} onClick={addProjectItem}>{item}</div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div 
//           className="dropdown" 
//           onMouseEnter={() => setShowDepartmentDropdown(true)} 
//           onMouseLeave={() => setShowDepartmentDropdown(false)}
//         >
//           <button className="dropbtn">Department</button>
//           {showDepartmentDropdown && (
//             <div className="dropdown-content">
//               {departmentItems.map((item, index) => (
//                 <div key={index} onClick={addDepartmentItem}>{item}</div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <button className="contact-us" onClick={() => window.location.href = '/contact'}>Contact Us</button>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDepartmentClick = (department) => {
    navigate('/secondpage', { state: { department } });
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu">
        <div 
          className="dropdown" 
          onMouseEnter={() => setShowProjectDropdown(true)} 
          onMouseLeave={() => setShowProjectDropdown(false)}
        >
          <button className="dropbtn">Project</button>
          {showProjectDropdown && (
            <div className="dropdown-content">
              <div>Black-Hawk</div>
              <div>Hornet</div>
              <div>Test</div>
            </div>
          )}
        </div>
        <div 
          className="dropdown" 
          onMouseEnter={() => setShowDepartmentDropdown(true)} 
          onMouseLeave={() => setShowDepartmentDropdown(false)}
        >
          <button className="dropbtn">Department</button>
          {showDepartmentDropdown && (
            <div className="dropdown-content">
              <div onClick={() => handleDepartmentClick('electronics')}>Electronics</div>
              <div onClick={() => handleDepartmentClick('mechanical')}>Mechanical</div>
              <div onClick={() => handleDepartmentClick('management')}>Management</div>
            </div>
          )}
        </div>
      </div>
      <button className="contact-us" onClick={() => window.location.href = '/contact'}>Contact Us</button>
    </nav>
  );
};

export default Navbar;
