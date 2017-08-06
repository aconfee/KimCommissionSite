import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inquiryForm.component.css';

class InqueryForm extends Component {
  constructor(props) {
    super(props);

    this.initialMobileState = {
      first: "First",
      last: "Last",
      email: "Email",
      captcha: "What is 2 + 3?"
    };

    this.initialDesktopState = {
      first: "",
      last: "",
      email: "",
      captcha: ""
    }

    if(this.isMobile()) {
      this.state = { ...this.initialMobileState, isMobile: this.isMobile(), errors: "" };
    } else {
      this.state = { ...this.initialDesktopState, isMobile: this.isMobile(), errors: "" };
    }
  };

  componentWillMount = () => {
    window.addEventListener("resize", this.updateDefaultValues);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDefaultValues);
  };

  // Used for realtime window resizing.
  updateDefaultValues = () => {
    if(this.isMobile() !== this.state.isMobile) {
      this.setState({ isMobile: this.isMobile() });

      if(this.isMobile()){
        if(this.state.first === this.initialDesktopState.first) this.setState({ first: this.initialMobileState.first });
        if(this.state.last === this.initialDesktopState.last) this.setState({ last: this.initialMobileState.last });
        if(this.state.email === this.initialDesktopState.email) this.setState({ email: this.initialMobileState.email });
        if(this.state.captcha === this.initialDesktopState.captcha) this.setState({ captcha: this.initialMobileState.captcha });
      } else {
        if(this.state.first === this.initialMobileState.first) this.setState({ first: this.initialDesktopState.first });
        if(this.state.last === this.initialMobileState.last) this.setState({ last: this.initialDesktopState.last });
        if(this.state.email === this.initialMobileState.email) this.setState({ email: this.initialDesktopState.email });
        if(this.state.captcha === this.initialMobileState.captcha) this.setState({ captcha: this.initialDesktopState.captcha });
      }
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleFocus = (event) => {
    const name = event.target.name;
    if(this.isMobile() && this.state[name] === this.initialMobileState[name]) {
      this.setState({ [name]: "" });
    }
  };

  handleFocusOut = (event) => {
    const name = event.target.name;
    if(this.isMobile() && this.state[name].length === 0) {
      this.setState({ [name]: this.initialMobileState[name] });
    }
  };

  handleSubmit = (event) => {
    const { first, last, email, captcha } = this.state;
    let errors = {};
    event.preventDefault();

    // Simple data validation.
    if(first.length === 0 || first === this.initialMobileState.first) errors.first = "Please provide your first name.";
    if(last.length === 0 || last === this.initialMobileState.last) errors.last = "Please provide your last name.";
    if(email.indexOf('@') === -1) errors.email = "Please enter a valid email.";
    if(captcha !== "5") errors.captcha = "Please enter the correct result of 2 + 3.";

    this.setState({ errors });

    if(Object.keys(errors).length > 0) return;

    this.props.onSubmit(this.state, this.props.estimate);
  };

  isMobile = () => {
    return window.innerWidth < 750;
  }

  renderErrors = () => {
    return Object.keys(this.state.errors).map((key) => {
      return (<p className="error-message" key={ key }>{ this.state.errors[key] }</p>);
    });
  };

  render() {
    return (
      <div className="form-container">
        <p>Estimate: ${ this.props.estimate.total }</p>
        <p>This amount is just an initial approximation.</p>
        <p>Once you hit send, I&#39;ll look over your details and get back to you within 24 hours!</p>

        <form onSubmit={ this.handleSubmit }>
          <span className="input-container">
            <label>First</label>
            <input
              type="text"
              name="first"
              value={ this.state.first }
              onChange={ this.handleChange }
              onFocus={ this.handleFocus }
              onBlur={ this.handleFocusOut }
              className={ this.state.errors.first ? "error-input" : ""}
            />
          </span>
          <span className="input-container">
            <label>Last</label>
            <input
              type="text"
              name="last"
              value={ this.state.last }
              onChange={ this.handleChange }
              onFocus={ this.handleFocus }
              onBlur={ this.handleFocusOut }
              className={ this.state.errors.last ? "error-input" : ""}
            />
          </span>
          <span className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={ this.state.email }
              onChange={ this.handleChange }
              onFocus={ this.handleFocus }
              onBlur={ this.handleFocusOut }
              className={ this.state.errors.email ? "error-input" : ""}
            />
          </span>
          <span className="input-container">
            <label>What is 2 + 3?</label>
            <input
              type="text"
              name="captcha"
              value={ this.state.captcha }
              onChange={ this.handleChange }
              onFocus={ this.handleFocus }
              onBlur={ this.handleFocusOut }
              className={ this.state.errors.captcha ? "error-input" : ""}
            />
          </span>
          { this.renderErrors() }
          <input type="submit" value="SEND" />
        </form>
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
