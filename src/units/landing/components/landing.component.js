import React from 'react';
import './landing.component.css';
import { Link } from 'react-router-dom';

function Landing({ availability }) {
  console.log('availability: ' + availability);

  const renderInfoMessage = () => {

    if(availability !== "closed") {
      return (
        <div className="flex-two">
          <p id="info-header" className="font-color-regular font-size-regular">Reach Out in 5 Clicks</p>
          <p className="font-color-light font-size-small">No commitment, just start a conversation :) Choose the options that best describe what you want below.</p>
          <p className="font-color-light font-size-small">I&#39;ll reach out to you within 24 hours after you send.</p>
          <p className="font-color-dark font-size-small"><b>Commercial commissions?</b> <Link to="/contact"><u className="click-here">Click here</u>.</Link></p>
        </div>
      );
    }

    return null;
  };

  const renderClosedMessage = () => {

    if(availability === "closed") {
      return (
        <div className="flex-two">
          <p id="info-header" className="font-color-regular font-size-regular">Commissions Closed</p>
          <p className="font-color-light font-size-small">I&#39;m currently booked for the next few months. Contact me and I’ll reach out when things open up again!</p>
          <p className="font-color-dark font-size-small"><b>CONTACT ME </b> <Link to="/contact"><u className="click-here">HERE</u>.</Link></p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="landing">
      <div className="flex-section">
        <div className="flex-container">
          <div>
            <p id="subtitle" className="font-color-regular">KimbyArting</p>
            <p id="title" className="font-color-dark">Commissions</p>
          </div>
          <div className="flex-self-portrait">
            <img src="./images/kim-cover.jpg" alt="kim greenough" title="kim greenough" />
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-one">
            <img src="./images/details-cover.png" alt="kimbyarting mermaid art" title="kimby arting mermaid art" />
          </div>
          { renderInfoMessage() }
          { renderClosedMessage() }
        </div>
      </div>
    </div>
  );
}

export default Landing;
