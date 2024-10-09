import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options); // Add the missing `/`
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message || error);
    if (error.response) {
      console.error("Server responded with:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("No response received from the server:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }
    throw error;
  }
};
