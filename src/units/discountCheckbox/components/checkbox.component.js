import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './checkbox.component.css';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.state = { isChecked: false };
  };

  handleClick = () => {
    if(this.props.onClick) {
      this.props.onClick(!this.state.isChecked);
    }

    this.setState( prevState => ({ isChecked: !prevState.isChecked }));
  };

  renderChecked = () => {
    return this.state.isChecked ? "checked" : "";
  };

  render() {
    return (
      <div className="checkbox-container">
        <div className={ "checkbox " + this.renderChecked() } onClick={ this.handleClick }></div>
        <span className="label">{ this.props.label }</span>
      </div>
    );
  }
};

Checkbox.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
};

export default Checkbox;
