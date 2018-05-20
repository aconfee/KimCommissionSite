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
  const url = 'https://iu81vnqiwb.execute-api.us-west-2.amazonaws.com/dev/commission/inquiry';

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

export const sendMessage = (senderDetails) => {
  const url = 'https://iu81vnqiwb.execute-api.us-west-2.amazonaws.com/dev/commission/message';

  const request = axios.post(url, {
    senderDetails
  });

  return {
    type: SEND_MESSAGE_ACTION_TYPE,
    payload: request
  };
}

export const SUBMIT_INQUERY_ACTION_TYPE = "submitInquery";
export const SEND_MESSAGE_ACTION_TYPE = "sendMessage";
