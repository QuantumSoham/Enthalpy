
import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.line1}>
      <header className={styles.header}>
        <div className={styles.logoAndIcons}>
          <img
            className={styles.enthalpyLogo}
            alt="Enthalpy Logo"
            src="/enthalpyLogo.png"
          />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.email}>teamenthalpyvitc@gmail.com</div>
        </div>
      </header>
      </div>
      
      <div className={styles.line4}>
      <div className={styles.divider} />
      </div>
      
      <div className={styles.line2}>
      <div className={styles.socialIcons}>
        <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
          <img className={styles.instaIcon} alt="Instagram" src="/insta-icon.png" />
        </a>
        <a href="https://linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer">
          <img className={styles.linkedinIcon} alt="LinkedIn" src="/linkedin-icon.png" />
        </a>
        <a href="https://x.com/your_x_profile" target="_blank" rel="noopener noreferrer">
          <img className={styles.xIcon} alt="X" src="/x-icon.png" />
        </a>
      </div>
      </div>
      
      <div className={styles.line3}>
      <div className={styles.vitLogoWrapper}>
        <img
          className={styles.vitLogo}
          alt="VIT Logo"
          src="/vit-logo.png"
        />
      </div>
    </div>
      </div>
      
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
