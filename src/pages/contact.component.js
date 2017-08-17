import React, { Component } from 'react';
import './contact.component.css';
import ContactFormContainer from '../units/form/containers/contactForm.container.js';

class Contact extends Component {
  render() {
    return(
      <div className="contact-container">
        <div className="contact-image">
          <img src="./images/details-cover.jpg" alt="kimbyarting mermaid art" title="kimby arting mermaid art" />
        </div>
        <ContactFormContainer />
      </div>
    );
  }
}

export default Contact;
