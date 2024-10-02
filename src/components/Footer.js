import PropTypes from "prop-types";
import styles from "./Footer1.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.instaIconParent}>
          <img
            className={styles.instaIcon}
            loading="lazy"
            alt=""
            src="/insta-icon.png"
          />
          <img
            className={styles.linkedinIcon}
            alt=""
            src="/linkedin-icon.png"
          />
          <img
            className={styles.xIcon}
            loading="lazy"
            alt=""
            src="/x-icon.png"
          />
          <img className={styles.image2Icon} alt="" src="/image-2.png" />
        </div>
        <div className={styles.teamenthalpyvitcgmailcomParent}>
          <div className={styles.teamenthalpyvitcgmailcom}>
            teamenthalpyvitc@gmail.com
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-16.png"
            />
          </div>
        </div>
      </header>
      <div className={styles.vitLogo1Wrapper}>
        <img
          className={styles.vitLogo1Icon}
          loading="lazy"
          alt=""
          src="/vit-logo.png"
        />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
