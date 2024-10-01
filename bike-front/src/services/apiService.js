import axios from "axios";

const backUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${backUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data from ${backUrl}${endpoint}`,
      error
    );
    throw error;
  }
};

export const sendOrderJson = async (orderData) => {
  try {
    const response = await axios.post(`${backUrl}/orders`, orderData, {
      headers: {
        "X-Headless-CMS": "true",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
