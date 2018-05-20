import { AVAILABILITY } from '../appsettings';

export const getAvailability = () => {
  return {
    type: GET_AVAILABILITY_ACTION_TYPE,
    payload: AVAILABILITY
  };
}

export const GET_AVAILABILITY_ACTION_TYPE = "getAvailability";
