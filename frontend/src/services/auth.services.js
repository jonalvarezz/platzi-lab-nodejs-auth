import axios from 'axios';
import { BASE_API_URL } from '../config/constants.config';

export const signupService = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/sign-up`, {
      username,
      password,
    });

    return [response.data, null];
  } catch (error) {
    const errors = error.response?.data?.errors;
    return [null, errors];
  }
};
