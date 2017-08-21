import React, { Component } from 'react';
import './contact.component.css';
import ContactFormContainer from '../units/form/containers/contactForm.container.js';

class Contact extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="contact-container">
        <div className="contact-image">
          <img src="./images/details-cover.png" alt="kimbyarting mermaid art" title="kimby arting mermaid art" />
        </div>
        <ContactFormContainer />
      </div>
    );
  }
}

export default Contact;
