import React, { Component } from 'react';
import './faq.component.css';

class Faq extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div className="faq-container">
        <div className="faq-image">
          <img src="./images/details-cover.jpg" alt="kimbyarting mermaid art" title="kimby arting mermaid art" />
        </div>
        <div className="faq-entries">
          <p className="header">What is your commission process?</p>
          <p className="text">Blah blah blah. Things.</p>
          <p className="header">Can I cancel a commission?</p>
          <p className="text">Hell nah. I cut you. </p>
        </div>
      </div>
    );
  }
}

export default Faq;
