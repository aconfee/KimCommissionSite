import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './style.css';

// Child components
import Navbar from '../units/navbar/components/navbar.component.js';
import Footer from '../units/footer/components/footer.component.js';
import Home from './home.component.js';
import Faq from './faq.component.js';
import Work from './work.component.js';
import Contact from './contact.component.js';

class Main extends Component {

  scrollToTop = () => {
    console.log('scroll called');
    window.scrollTo(0, 0);
  };

  render(){
    return(
      <div>
        <Navbar />

        <Route exact path="/" component={Home} onEnter={this.scrollToTop} />
        <Route path="/faq" component={Faq} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} onEnter={this.scrollToTop} />

        { Footer() }
      </div>
    );
  }
}

export default Main;
