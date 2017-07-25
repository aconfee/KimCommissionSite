import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './style.css';

// Child components
import Navbar from '../units/navbar/components/navbar.component.js';
import Footer from '../units/footer/components/footer.component.js';
import HomeContainer from './home.container.js';
import Faq from './faq.component.js';
import Work from './work.component.js';
import Contact from './contact.component.js';

class Main extends Component {
  render(){
    return(
      <div>
        <Navbar />

        <Route exact path="/" component={HomeContainer} />
        <Route path="/faq" component={Faq} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />

        { Footer() }
      </div>
    );
  }
}

export default Main;
