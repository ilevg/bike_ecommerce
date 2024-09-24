import axios from "axios";

const wordpressSiteUrl = process.env.REACT_APP_WORDPRESS_SITE_URL;

const instance = axios.create({
  baseURL: wordpressSiteUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
