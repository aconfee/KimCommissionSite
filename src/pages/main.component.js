import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Child components
import Home from './home.component.js';
import Faq from './faq.component.js';

class Main extends Component {
  render(){
    return(
      <div>
        <h1>This is the main template that will always be visible</h1>

        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
      </div>
    );
  }
}

export default Main;
