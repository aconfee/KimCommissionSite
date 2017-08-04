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
  const url = '/api/contact';

  const commissionDetailsText = {
    ...commissionDetails,
    detailTitle: detailTitles[commissionDetails.detailIndex],
    frameTitle: frameTitles[commissionDetails.framingIndex],
    backgroundTitle: backgroundTitles[commissionDetails.backgroundIndex]
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
