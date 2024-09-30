const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const app = express();
app.use((req, res, next) => {
  const allowedOrigins = [
    "back-test-three.vercel.app",
    "http://localhost:3000",
    "http://bike-ecommerce:3000",
    "http://192.168.2.239:3000",
    "http://bikeecommerce.atwebpages.com",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(cors());
app.use(bodyParser.json());

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/products", async (req, res) => {
  try {
    const { data } = await api.get("products", { per_page: 50 });
    res.json(data);
  } catch (error) {
    res
      .status(error.response.status)
      .json({ error: error.response.statusText });
    console.error("Error fetching products:", error.message);
  }
});

app.get("/customers?:id", async (req, res) => {
  try {
    const { data } = await api.get("customers");
    res.json(data);
  } catch (error) {
    res
      .status(error.response.status)
      .json({ error: error.response.statusText });
    console.error("Error fetching customers:", error.message);
  }
});

app.post("/orders", async (req, res) => {
  try {
    const orderData = req.body;
    const isHeadlessCMS = req.headers["x-headless-cms"];
    if (isHeadlessCMS && isHeadlessCMS.toLowerCase() === "true") {
      const { data } = await api.post("orders", orderData);
      res.json(data);
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
    console.error("Error creating order:", error.message);
  }
});

app.post("/register", async (req, res) => {
  const { email, pass } = req.body;
  const authKey = process.env.AUTH_KEY;
  const wordpressUrl = process.env.WORDPRESS_SITE_URL;
  try {
    const registerUrl = `${wordpressUrl}/?rest_route=/simple-jwt-login/v1/users&email=${email}&password=${pass}&AUTH_KEY=${authKey}`;
    const registerResponse = await axios.post(registerUrl);
    const registerData = registerResponse.data;
    console.log(registerData);

    if (registerData.success === true) {
      const authUrl = `${wordpressUrl}/?rest_route=/simple-jwt-login/v1/auth&email=${email}&password=${pass}&AUTH_KEY=${authKey}`;
      const authResponse = await axios.post(authUrl);

      res.json(authResponse.data);
    } else {
      return res.json(registerData);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error during registration/authentication:", error.message);
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
