import React from 'react';
import './landing.component.css';

function Landing(props) {
  return (
    <div className="section">
      <div className="row">
        <div className="column-half center">
          <div className="title-container">
            <p id="subtitle" className="font-color-light">KimbyArting</p>
            <p id="title" className="font-color-dark">Commissions</p>
          </div>
        </div>
        <div className="column-half">
          <div className="kim-cover">
            <img src="./images/kim-cover.jpg" alt="kim greenough" title="kim greenough" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column-half center">
          <img className="details-cover" src="./images/details-cover.jpg" alt="kimbyarting mermaid art" title="kimby arting mermaid art" />
        </div>
        <div className="column-half">
          <div className="details-container">
            <p className="font-color-regular font-size-regular">Reach Out in 5 Clicks</p>
            <p className="font-color-light font-size-small">No commitment, just start a conversation :) Choose the options that best describe what you want below.</p>
            <p className="font-color-light font-size-small">I’ll reach out to you within 24 hours after you send.</p>
            <p className="font-color-dark font-size-small"><b>Commercial commissions?</b> Click here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
