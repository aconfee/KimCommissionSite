import axios from 'axios';

export const getAvailability = () => {
  const url = '/api/availability';

  const request = axios.get(url);

  return {
    type: GET_AVAILABILITY_ACTION_TYPE,
    payload: request
  };
}

export const GET_AVAILABILITY_ACTION_TYPE = "getAvailability";
