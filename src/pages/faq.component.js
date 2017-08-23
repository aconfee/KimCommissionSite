import React, { Component } from 'react';
import './faq.component.css';

class Faq extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="faq-section">
        <div className="faq-container">
          <div className="faq-image">
            <img src="./images/details-cover.png" alt="kimbyarting mermaid art" title="kimby arting mermaid art" />
          </div>
          <div className="faq-entries">
            <p className="header">How do I get started?</p>
            <p className="text">1) Send an inquiry. I’ll reach out to learn more about what you want.<br/><br/>2) Prepare for our discussion by gathering reference photos and as much detail as possible about what you are envisioning.<br/><br/>3) Once we’re on the same page, we’ll sign on a final price and I’ll send you a paypal invoice.<br/><br/>4) Send your payment and work can begin!</p>
            <p className="header">What is the commission process?</p>
            <p className="text">1) I start by creating a set of (digital) rough sketches.<br/><br/>2) You will then have the opportunity to review the initial sketches and request some revisions.<br/><br/>3) I begin work on the final piece.<br/><br/>4) You may request additional minor changes on the final piece. Upon completion you will receive a high-res version.</p>
            <p className="header">How much does a commission cost?</p>
            <p className="text">Commission prices vary based on the complexity of the piece.<br/><br/>Estimates shown on the homepage are a rough guess as to what the commission will cost, although the final price may vary.</p>
            <p className="header">Can you work within my budget?</p>
            <p className="text">Absolutely!<br/><br/>Reach out through the site, and I’ll get back to you within 24 hours so we can start discussing your vision and how to create a piece that you’ll love and that you can afford.</p>
            <p className="header">How does payment work?</p>
            <p className="text">I charge the full amount of the commission upfront. Invoices are sent via Paypal and payment is expected after we’re on the same page and sign a proposal or contract specifying details and terms of the project.</p>
            <p className="header">When I submit a commission inquiry, am I automatically approved?</p>
            <p className="text">No.<br/><br/>I consider every commission request I receive. Whether you’re a good fit or not, I’ll reach out directly to let you know and discuss further.</p>
            <p className="header">Can I cancel a commission?</p>
            <p className="text">Yes.<br/><br/>If for any reason the commission must be terminated, you must pay for all of the artwork which has been made up to the point of termination, including rough sketches, linework, coloring, etc. as well as a $50 cancellation fee.<br/><br/>Before starting a commission please be sure that you are fully committed.</p>
            <p className="header">Can I print my commission on a t-shirt and sell it?</p>
            <p className="text">Yes, just be sure to let me know!<br/><br/>Most of my contracts are non-commersial and I reserve all the rights. If you want art for commercial use, let me know and I’ll release the rights to you for resale.</p>
            <p className="header">Can I schedule a commission in advance?</p>
            <p className="text">Absolutely! I often have many different commissions going at once, so I am happy to schedule your commission for the near future.<br/><br/>Be aware that I will not start the commission until payment has been received.</p>
            <p className="header">Can I share the final commission on my social media?</p>
            <p className="text">Absolutely! I’d love it if you tagged me and used #kimbyarting when you share it :)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
