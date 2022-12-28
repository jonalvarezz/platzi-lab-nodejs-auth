import axios from 'axios';
import { BASE_API_URL } from '../config/constants.config';

export const getProfile = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/profile`, {
      withCredentials: true,
    });

    return [response.data, null];
  } catch (error) {
    let errors =
      error.response?.data?.errors ||
      error.response?.data?.error ||
      error.response?.data?.message;

    if (!Array.isArray(errors)) errors = [errors];

    return [null, errors];
  }
};
