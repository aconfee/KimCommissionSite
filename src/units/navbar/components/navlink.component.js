import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './navlink.component.css';

class Navlink extends Component {

  isActive() {
    return window.location.pathname === this.props.url;
  }

  render() {
    let activeIndicator = null;
    if(this.isActive()) {
      activeIndicator = (
        <div className="active-indicator">
          <svg height="6" width="6">
            <circle cx="3" cy="3" r="3" fill="black" />
          </svg>
        </div>
      );
    }

    return (
      <span className="navbar-link">
        <Link to={ this.props.url } style={(this.isActive()) ? {color:"black"} : {}}>
          { this.props.text }
        </Link>
        { activeIndicator }
      </span>
    );
  }
}

export default Navlink;
