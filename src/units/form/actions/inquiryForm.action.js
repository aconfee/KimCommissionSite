import axios from 'axios';

const detailTitles = [
  "Sketch", "Flat-Color", "Painterly", "Illustrative"
];

const frameTitles = [
  "Bust", "Half-Body", "Full-Body"
];

const backgroundTitles = [
  "Solid-Color", "Pattern-Texture", "Background Elements"
];

export const submitInquery = (senderDetails, commissionDetails) => {
  const url = '/api/contact/inquiry';

  const commissionDetailsText = {
    ...commissionDetails,
    detailTitle: detailTitles[commissionDetails.detailIndex],
    frameTitle: frameTitles[commissionDetails.framingIndex],
    backgroundTitle: backgroundTitles[commissionDetails.backgroundIndex],
    asIs: commissionDetails.discount === 1 ? false : true
  }

  const request = axios.post(url, {
    senderDetails,
    commissionDetails: commissionDetailsText
  });

  return {
    type: SUBMIT_INQUERY_ACTION_TYPE,
    payload: request
  };
}

export const SUBMIT_INQUERY_ACTION_TYPE = "submitInquery";
