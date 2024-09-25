import classNames from "classnames";
import React, { useContext, useState } from "react";
import { ActiveAuthComponentContext } from "../../../../context";
import LoginAPI from "../../../../services/auth/LoginApi";
import Button from "../../../../UI/button/Button";
import styles from "./Login.module.scss";

const Login = ({ props }) => {
  const [activeAuthComponent, setActiveAuthComponent] = useContext(
    ActiveAuthComponentContext
  );
  !activeAuthComponent && console.log(activeAuthComponent);
  const handleTabClick = (tab) => {
    setActiveAuthComponent(tab);
  };

  const [APIDetailsLogin, setAPIDetailsLogin] = useState({
    email: "",
    pass: "",
    AUTH_KEY: "Key123",
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    pass: "",
    AUTH_KEY: "Key123",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAPIDetailsLogin({ ...loginDetails });
  }
  return (
    <>
      <div className={styles.titleLinks}>
        <h3 className={styles.title}>Login</h3>
        <button
          onClick={() => handleTabClick("registration")}
          className={styles.btn}
        >
          Registration
        </button>
      </div>
      <p>{props.serverMessage}</p>

      <form className={styles.form}>
        <label className={styles.lable} htmlFor="email">
          E-mail
        </label>
        <input
          className={styles.input}
          type="email"
          placeholder="example@email.com"
          name="email"
          value={loginDetails.email}
          onChange={handleChange}
        />

        <label className={styles.lable} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="pass"
          value={loginDetails.pass}
          onChange={handleChange}
        />

        <div className={styles.btnLogin}>
          <Button
            type="submit"
            width="100%"
            text="Log in"
            value="Go"
            onClick={handleSubmit}
          />
        </div>

        <div className={styles.btnItems}>
          <div className={styles.rememberInputCont}>
            <input
              className={styles.rememberInput}
              type="checkbox"
              name="remember"
              id="remember"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            onClick={() => handleTabClick("forgotPassword")}
            className={classNames(styles.btn, styles.btnForgot)}
          >
            Forgot your password?
          </button>
        </div>
      </form>
      <LoginAPI
        APIDetailsLogin={APIDetailsLogin}
        setUsername={props.setUsername}
        setIsLoggedIn={props.setIsLoggedIn}
        setServerMessage={props.setServerMessage}
      />
    </>
  );
};

export default Login;
