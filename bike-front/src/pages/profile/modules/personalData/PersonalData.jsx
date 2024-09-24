import classNames from "classnames";
import React from "react";
import Button from "../../../../UI/button/Button";
import styles from "./PersonalData.module.scss";

const PersonalData = () => {
  return (
    <div className={styles.personalData}>
      <h3 className={styles.personalSubtitle}>Personal data</h3>
      <form className={styles.personalForm} action="">
        <div className={styles.inputCont}>
          <div>
            <label className={styles.lable} htmlFor="fNmae">
              First Name
            </label>
            <input
              className={classNames(styles.input, styles.inputFname)}
              type="text"
              name="fNmae"
              id="fNmae"
            />
          </div>
          <div>
            <label className={styles.lable} htmlFor="lNmae">
              Last Name
            </label>
            <input
              className={styles.input}
              type="text"
              name="lNmae"
              id="lNmae"
            />
          </div>
        </div>

        <label className={styles.lable} htmlFor="email">
          E-mail
        </label>
        <input className={styles.input} type="text" name="email" id="email" />

        <label className={styles.lable} htmlFor="phone">
          Phone Number
        </label>
        <input className={styles.input} type="text" name="phone" id="phone" />

        <label className={styles.lable} htmlFor="city">
          City
        </label>
        <input className={styles.input} type="text" name="city" id="city" />

        <label className={styles.lable} htmlFor="Str">
          Street
        </label>
        <input className={styles.input} type="text" name="Str" id="Str" />

        <div className={styles.inputCont}>
          <div>
            <label className={styles.lable} htmlFor="building">
              Building
            </label>
            <input
              className={styles.input}
              type="text"
              name="building"
              id="building"
            />
          </div>
          <div>
            <label className={styles.lable} htmlFor="postal">
              Postal code
            </label>
            <input
              className={styles.input}
              type="text"
              name="postal"
              id="postal"
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Button width="100%" text="Change" />
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
