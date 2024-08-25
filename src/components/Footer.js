import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4>
              <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              Pretoria, Gauteng, South Africa.
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              +2764 851 3696
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              rebotilwemokiba@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>Rebotilwe Mokiba | IT Professional & Software Developer.
            Recent Graduate  with a strong foundation in software development and a passion for creating innovative solutions. Boasting a year of hands-on experience in full-stack development. Let's connect and build something amazing together!
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/Rebotilwe Bobo">
              <FaFacebook size={30} className="social-icon" />
            </Link>

            <Link to="https://twitter.com/Rebotilwe Mokiba">
              <FaTwitter size={30} className="social-icon" />
            </Link>

            <Link to="https://www.linkedin.com/in/Rebotilwe Mokiba">
              <FaLinkedin size={30} className="social-icon" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;