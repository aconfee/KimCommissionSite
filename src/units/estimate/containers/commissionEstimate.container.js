import { connect } from 'react-redux';
import './commissionEstimate.container.css';
import StickyEstimateDesktop from '../components/stickyEstimateDesktop.component.js';

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

// TODO: Can check if mobile or not right here and set correct object to map container to.
// StickyEstimateMobile and StickyEstimateDesktop.

const CommissionEstimate = connect(
  mapStateToProps,
  null
)(StickyEstimateDesktop);

export default CommissionEstimate;
