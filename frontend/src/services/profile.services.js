import axios from 'axios';
import { BASE_API_URL } from '../config/constants.config';

export const getProfileService = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/profile`, {
      withCredentials: true,
    });

    return [response.data, null];
  } catch (error) {
    let errors =
      error.response?.data?.errors ||
      error.response?.data?.message ||
      error.response?.data?.error;

    if (!Array.isArray(errors)) errors = [errors];

    return [null, errors];
  }
};

export const updateProfileService = async (
  newUsername,
  newPassword,
  currentPassword
) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/profile`,
      {
        newUsername,
        newPassword,
        currentPassword,
      },
      { withCredentials: true }
    );

    return [response.data, null];
  } catch (error) {
    let errors =
      error.response?.data?.errors ||
      error.response?.data?.message ||
      error.response?.data?.error;

    if (!Array.isArray(errors)) errors = [errors];
    console.log(errors);

    return [null, errors];
  }
};

export const deleteProfileService = async (password) => {
  try {
    const response = await axios.delete(`${BASE_API_URL}/profile`, {
      withCredentials: true,
    });

    return [response.data, null];
  } catch (error) {
    let errors =
      error.response?.data?.errors ||
      error.response?.data?.message ||
      error.response?.data?.error;

    if (!Array.isArray(errors)) errors = [errors];
    console.log(errors);

    return [null, errors];
  }
};
