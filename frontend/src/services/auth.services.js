import axios from 'axios';

export const signupService = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/sign-up', {
      username,
      password,
    });

    return [response.data, null];
  } catch (error) {
    const errors = error.response?.data?.errors;
    return [null, errors];
  }
};
