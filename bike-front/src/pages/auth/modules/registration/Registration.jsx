import classNames from "classnames";
import React, { useContext, useState } from "react";
import { ActiveAuthComponentContext } from "../../../../context";
import SignUpAPI from "../../../../services/auth/SignUpApi";
import Button from "../../../../UI/button/Button";
import styles from "./Registration.module.scss";

const Registration = ({ props }) => {
  const [activeAuthComponent, setActiveAuthComponent] = useContext(
    ActiveAuthComponentContext
  );
  !activeAuthComponent && console.log(activeAuthComponent);
  const [error, setError] = useState(false);

  const handleTabClick = (tab) => {
    setActiveAuthComponent(tab);
  };
  const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
    email: "",
    pass: "",
    passRepeat: "",
    AUTH_KEY: process.env.REACT_APP_AUTH_KEY,
  });
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    pass: "",
    passwordRepeat: "",
    AUTH_KEY: process.env.REACT_APP_AUTH_KEY,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const validatePasswords = () => {
    if (signUpDetails.pass !== signUpDetails.passwordRepeat) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (validatePasswords()) {
      setAPIDetailsSignUp({ ...signUpDetails });
    }
  }

  return (
    <>
      <div className={styles.titleLinks}>
        <h3 className={styles.title}>Registration</h3>
        <button onClick={() => handleTabClick("login")} className={styles.btn}>
          Login
        </button>
      </div>

      <form className={styles.form}>
        <p>{props.serverMessage}</p>
        {error && <span>The passwords don't match.</span>}
        <label className={styles.lable} htmlFor="email">
          E-mail
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={signUpDetails.email}
          onChange={handleChange}
        />

        <label className={styles.lable} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="pass"
          value={signUpDetails.pass}
          onChange={handleChange}
        />

        <label className={styles.lable} htmlFor="passwordRepeat">
          Repeat Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="passwordRepeat"
          value={signUpDetails.passwordRepeat}
          onChange={handleChange}
        />

        <div className={styles.btnLogin}>
          <div className={styles.btnLoginCont}>
            <Button width="100%" text="Registration" onClick={handleSubmit} />
          </div>
          <div>
            <span className={styles.lableEnterBtn}>
              Have you already registered?{" "}
            </span>
            <button
              onClick={() => handleTabClick("login")}
              className={classNames(styles.btn, styles.btnEnter)}
            >
              {" "}
              Login
            </button>
          </div>
        </div>
      </form>

      <SignUpAPI
        APIDetailsSignUp={APIDetailsSignUp}
        setUsername={props.setUsername}
        setIsLoggedIn={props.setIsLoggedIn}
        setServerMessage={props.setServerMessage}
      />
    </>
  );
};

export default Registration;
