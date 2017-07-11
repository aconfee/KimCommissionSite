import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';
import Navlink from './navlink.component.js';

function Navbar(props) {
    return (
      <div>
        <div className="navbar">
          <div className="content">
            <Link to="/">
              <img className="navbar-logo" src="./images/logo.jpg" alt="kimbyarting logo" title="kimbyarting logo" />
            </Link>
            <div className="navbar-links-container">
              { Navlink({ text: "F.A.Q.", url: "/faq" }) }
              { Navlink({ text: "WORK", url: "/work" }) }
              { Navlink({ text: "CONTACT", url: "/contact" }) }
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
