import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';
import Navlink from './navlink.component.js';
import Hamburger from './hamburger.component.js';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleHamburgerClick = () => {
    this.setState( prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleLinkClick = () => {
    this.setState({ isOpen: false });
  }

  animateOpen = () => {
    return this.state.isOpen ? "open" : "";
  }

  render() {
    return (
      <div>
        <div className={ "navbar-background " + this.animateOpen() }></div>
        <div className="navbar ">
          <div className="content">
            <Link to="/" onClick={ this.handleLinkClick }>
              <img className="navbar-logo" src="./images/logo.jpg" alt="kimbyarting logo" title="kimbyarting logo" />
            </Link>
            <div className={ "navbar-links-container " + this.animateOpen() } onClick={ this.handleLinkClick }>
              { Navlink({ text: "F.A.Q.", url: "/faq" }) }
              { Navlink({ text: "WORK", url: "/work" }) }
              { Navlink({ text: "CONTACT", url: "/contact" }) }
            </div>
            <Hamburger isOpen={ this.state.isOpen } onClick={ this.handleHamburgerClick }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
