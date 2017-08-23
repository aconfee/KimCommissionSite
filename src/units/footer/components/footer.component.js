import React from 'react';
import { Link } from 'react-router-dom';
import './footer.component.css';

function Footer(props) {
  return (
    <div className="footer">
      <span className="column">
        <div className="social-column-container">
          <img className="logo" src="./images/logo.png" alt="kimbyarting logo" title="kimbyarting logo" />
          <p className="font-size-regular font-color-dark">Social</p>
          <div className="social-icon-container">
            <a href="https://www.instagram.com/kimbyarting/" target="_blank" rel="noopener noreferrer">
              <div className="social-icon instagram"></div>
            </a>
            <a href="https://www.artstation.com/kimbyarting" target="_blank" rel="noopener noreferrer">
              <div className="social-icon artstation"></div>
            </a>
            <a href="https://www.facebook.com/kimbyarting/" target="_blank" rel="noopener noreferrer">
              <div className="social-icon facebook"></div>
            </a>
            <a href="https://twitter.com/kimbyarting" target="_blank" rel="noopener noreferrer">
              <div className="social-icon twitter"></div>
            </a>
            <a href="http://kimbyarting.tumblr.com/" target="_blank" rel="noopener noreferrer">
              <div className="social-icon tumblr"></div>
            </a>
          </div>
        </div>
      </span>
      <span className="column">
        <div className="sitemap-column-container font-size-small font-color-regular">
          <p className="font-size-regular font-color-dark">More</p>
          <Link to="/faq" className="font-size-small font-color-regular">F.A.Q.</Link>
          <Link to="/work" className="font-size-small font-color-regular">Work</Link>
          <Link to="/contact" className="font-size-small font-color-regular">Contact</Link>
        </div>
      </span>
      <span className="column">
        <div className="copyright-column-container font-size-tiny font-color-light">
          <p>Site made with &hearts; by Adam Estela</p>
          <p>All content © 2017 Kim Greenough, all rights reserved.</p>
        </div>
      </span>
    </div>
  );
}

export default Footer;
