import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inquiryForm.component.css';
import DiscountCheckboxContainer from '../../discountCheckbox/containers/discountCheckbox.container.js';

class InqueryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
      last: "",
      email: "",
      captcha: "",
      isMobile: this.isMobile(),
      isSending: false,
      isSent: false,
      errors: {}
    };
  };

  componentWillMount = () => {
    window.addEventListener("resize", this.update);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.update);
  };

  componentWillReceiveProps = (nextProps) => {
    const { inquiryResponse } = nextProps

    if(inquiryResponse.timestamp !== this.props.inquiryResponse.timestamp) {
      if(inquiryResponse.status !== 200) {
        this.setState({
          isSending: false,
          errors: { response: inquiryResponse.statusText }
        });
      } else {
        this.setState({ isSending: false, isSent: true });
      }
    }
  };

  // Used for realtime window resizing.
  update = () => {
    if(this.isMobile() !== this.state.isMobile) {
      this.setState({ isMobile: this.isMobile() });
    }
  }

  isMobile = () => {
    return window.innerWidth < 750;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { first, last, email, captcha } = this.state;
    let errors = {};
    event.preventDefault();

    // Simple data validation.
    if(first.length === 0) errors.first = "Please provide your first name.";
    if(last.length === 0) errors.last = "Please provide your last name.";
    if(email.indexOf('@') === -1) errors.email = "Please enter a valid email.";
    if(captcha !== "5") errors.captcha = "Please enter the correct result of 2 + 3.";

    this.setState({ errors });

    if(Object.keys(errors).length > 0) return;

    this.setState({ isSending: true });
    this.props.onSubmit(this.state, this.props.estimate);
  };

  renderInput = (label, type, name, value, error) => {
    return (
      <span className="input-container">
        <label>{ label }</label>
        <input
          type={ type }
          name={ name }
          value={ value }
          placeholder={ this.state.isMobile ? label : "" }
          onChange={ this.handleChange }
          className={ error ? "error-input" : ""}
        />
      </span>
    );
  };

  renderErrors = () => {
    return Object.keys(this.state.errors).map((key) => {
      return (<p className="error-message" key={ key }>{ this.state.errors[key] }</p>);
    });
  };

  renderLoader = () => {
    if(this.state.isSending) {
      return (<div className="loader"></div>);
    } else {
      return (<input type="submit" value="SEND" />);
    }
  }

  renderFlip = () => {
    if(this.state.isSent) {
      return "animate-flip-right";
    }
    return "";
  }

  render() {
    return (
      <div className="inquiry-form-container">
        <div className={ "form-container " + this.renderFlip() }>
          <div className="card-front">
            <p className="header">Estimate: ${ this.props.estimate.total }</p>
            <p className="subheader">This amount is just an initial approximation.</p>
            <p className="front-information">Once you hit send, I&#39;ll look over your details and get back to you within 24 hours!</p>
            <form onSubmit={ this.handleSubmit }>
              { this.renderInput("First", "text", "first", this.state.first, this.state.errors.first) }
              { this.renderInput("Last", "text", "last", this.state.last, this.state.errors.last) }
              { this.renderInput("Email", "email", "email", this.state.email, this.state.errors.email) }
              { this.renderInput("What is 2 + 3?", "text", "captcha", this.state.captcha, this.state.errors.captcha) }
              { this.renderErrors() }
              <div className="inquiry-form-discount-checkbox">
                <DiscountCheckboxContainer />
              </div>
              { this.renderLoader() }
            </form>
          </div>
          <div className="card-back">
            <img className="email-sent-image" src="./images/logo.jpg" alt="Thank you. Message sent." title="kimbyarting Peter the Duke. Thank you email sent." />
            <p className="header back-header">Thank you!</p>
            <p className="back-information">Your inquiry has been sent!</p>
            <p className="back-information">I&#39;ll follow up within 24 hours :)</p>
          </div>
        </div>
      </div>
    );
  };
};

InqueryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  estimate: PropTypes.shape({
    detailIndex: PropTypes.number.isRequired,
    framingIndex: PropTypes.number.isRequired,
    backgroundIndex: PropTypes.number.isRequired,
    character: PropTypes.number.isRequired,
    numberOfCharacters: PropTypes.number.isRequired,
    background: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired
};

export default InqueryForm;
