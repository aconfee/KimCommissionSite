import { connect } from 'react-redux';
import './commissionEstimate.container.css';
import DesktopCommissionEstimate from '../components/desktopCommissionEstimate.component.js';

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
    total: state.estimate.total,
    stickyTrigger: state.triggers.stickyEstimateTrigger
  };
};

// TODO: Can check if mobile or not right here and set correct object to map container to.
// DesktopCommissionEstimate and MobileCommissionEstimate.

const CommissionEstimate = connect(
  mapStateToProps,
  null
)(DesktopCommissionEstimate);

export default CommissionEstimate;
