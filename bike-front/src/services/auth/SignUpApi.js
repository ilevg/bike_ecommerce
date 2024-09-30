import { useEffect, useState } from "react";
import axios from "axios";

function SignUpAPI(props) {
  const [urlToLogin, setUrlToLogin] = useState("");
  const authKey = process.env.REACT_APP_AUTH_KEY;
  const wordpressUrl = process.env.REACT_APP_WORDPRESS_SITE_URL;

  const backUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    if (props.APIDetailsSignUp.email.length > 0) {
      const url = `${backUrl}/register`;
      axios
        .post(
          url,
          {
            email: props.APIDetailsSignUp.email,
            pass: props.APIDetailsSignUp.pass,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.success === true) {
            localStorage.setItem("jwt", response.data.data.jwt);
            setUrlToLogin(
              `${wordpressUrl}/?rest_route=/simple-jwt-login/v1/autologin&jwt=${response.data.data.jwt}&AUTH_KEY=${authKey}`
            );
          } else {
            props.setServerMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error.message);
          props.setServerMessage("An error occurred during registration.");
        });
    }
  }, [props.APIDetailsSignUp, props, authKey, wordpressUrl, backUrl]);

  useEffect(() => {
    if (urlToLogin.length > 0) {
      axios
        .get(urlToLogin)
        .then((response) => {
          if (response.status === 200) {
            props.setIsLoggedIn(true);
            props.setUsername(props.APIDetailsSignUp.email);
            window.location.replace("/profile");
          } else {
            console.error("Autologin failed.");
          }
        })
        .catch((error) => {
          console.error("Error during autologin:", error.message);
        });
    }
  }, [urlToLogin, props]);

  return null;
}

export default SignUpAPI;
