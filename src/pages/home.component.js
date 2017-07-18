import React, { Component } from 'react';
import Landing from '../units/landing/components/landing.component.js';
import './home.component.css';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="background">
          <div></div>
        </div>
        <Landing />
      </div>
    );
  }
}

export default Home;
