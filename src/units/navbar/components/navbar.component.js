import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  handleClick(i) {
    this.setState({active: i});
  }

  render() {

    const activeIndicator = (
      <svg height="6" width="6">
        <circle cx="3" cy="3" r="3" fill="black" />
      </svg>
    );

    return (
      <div>
        <div className="navbar font-color-regular font-size-small">
          <div className="content">
            <Link to="/"  onClick={ () => this.handleClick(0) }>
              <img className="navbar-logo" src="./images/logo.jpg" />
            </Link>
            <div className="navbar-links-container">
              <span className="navbar-link">
                <Link to="/faq" onClick={ () => this.handleClick(1) }>F.A.Q.</Link>
                {this.state.active === 1 &&
                  <div className="active-indicator">{ activeIndicator }</div>
                }
              </span>
              <span className="navbar-link">
                <Link to="/work" onClick={ () => this.handleClick(2) }>WORK</Link>
                {this.state.active === 2 &&
                  <div className="active-indicator">{ activeIndicator }</div>
                }
              </span>
              <span className="navbar-link">
                <Link to="/contact" onClick={ () => this.handleClick(3) }>CONTACT</Link>
                {this.state.active === 3 &&
                  <div className="active-indicator">{ activeIndicator }</div>
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Navbar;
