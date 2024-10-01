import { useEffect, useState } from "react";

function LoginAPI(props) {
  const [urlToLogin, setUrlToLogin] = useState("");

  useEffect(() => {
    if (props.APIDetailsLogin.email && props.APIDetailsLogin.email.length > 0) {
      let formData = new FormData();
      formData.append("email", props.APIDetailsLogin.email);
      formData.append("password", props.APIDetailsLogin.pass);
      formData.append("AUTH_KEY", props.APIDetailsLogin.AUTH_KEY);
      const url =
        "http://bikeecommerce.atwebpages.com/?rest_route=/simple-jwt-login/v1/auth";
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data["success"] === true) {
            localStorage.setItem("jwt", data["data"]["jwt"]);
            setUrlToLogin(
              `http://bikeecommerce.atwebpages.com/?rest_route=/simple-jwt-login/v1/autologin&JWT=${data["data"]["jwt"]}&AUTH_KEY=Key123`
            );
          } else {
            props.setServerMessage(data["data"]["message"]);
          }
        });
    }
  }, [props.APIDetailsLogin, props]);

  useEffect(() => {
    if (urlToLogin.length > 0) {
      fetch(urlToLogin, {
        method: "GET",
      }).then((response) => {
        if (response.status === "200") {
          props.setIsLoggedIn(true);
          props.setUsername(props.APIDetailsLogin.email);
          window.location.replace("https://bike-ecommerce-front.vercel.app/profile");
        } else {
          console.error("error");
        }
      });
    }
  }, [urlToLogin, props]);

  return null;
}

export default LoginAPI;
