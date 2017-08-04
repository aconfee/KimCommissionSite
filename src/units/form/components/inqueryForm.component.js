import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InqueryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
      last: "",
      email: "",
      captcha: 0
    };
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state, this.props.estimate);
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>First
          <input type="text" name="first" value={ this.state.first } onChange={ this.handleChange } />
        </label>
        <label>Last
          <input type="text" name="last" value={ this.state.last } onChange={ this.handleChange } />
        </label>
        <label>Email
          <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } />
        </label>
        <label>What is 2 + 3?
          <input type="number" name="captcha" value={ this.state.captcha } onChange={ this.handleChange } />
        </label>
        <input type="submit" value="SEND" />
      </form>
    );
  };
};

// TODO: check for and require estimate.
InqueryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default InqueryForm;
