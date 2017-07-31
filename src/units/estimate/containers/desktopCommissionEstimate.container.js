import { connect } from 'react-redux';
import './desktopCommissionEstimate.container.css';
import StickyCommissionEstimate from '../components/stickyCommissionEstimate.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    items: [
      {
        label: "Character",
        displayValue: "$" + state.estimate.character
      },
      {
        label: "Background",
        displayValue: "$" + state.estimate.background
      },
      {
        label: "# of Characters",
        displayValue: "x" + state.estimate.numberOfCharacters
      }
    ],
    total: state.estimate.total
  };
};

const DesktopCommissionEstimate = connect(
  mapStateToProps,
  null
)(StickyCommissionEstimate);

export default DesktopCommissionEstimate;
