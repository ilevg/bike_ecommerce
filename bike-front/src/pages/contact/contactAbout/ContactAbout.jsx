import classNames from "classnames";
import React from "react";
import GoogleMap from "../../../UI/googleMap/GoogleMap";
import styles from "./ContactAbout.module.scss";

const ContactAbout = () => {
  return (
    <div>
      <GoogleMap />
      <div className={classNames(styles.contact, "container")}>
        <div className={styles.info}>
          <div>
            <h4 className={styles.infoTitle}>Адрес магазина:</h4>
            <span>7/8 Dovator str., 1, London, UK</span>
          </div>
          <div>
            <h4 className={styles.infoTitle}>Working hours:</h4>
            <span>Monday — Sunday from 10:00 to 20:00</span>
            <div>SEVEN DAYS A WEEK</div>
          </div>
          <div>
            <h4 className={styles.infoTitle}>Phone numbers:</h4>
            <a href="+14950557586">+1 (495) 055-75-86</a>
            <div>
              <a href="+14950551245">+1 (495) 055-75-86</a>
            </div>
          </div>
          <div>
            <h4 className={styles.infoTitle}>E-mail:</h4>
            <a href="mailto:order@world-bike.com">order@world-bike.com</a>
          </div>
        </div>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableTitle}>
              <td>Legal information:</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td className={styles.tableInfo}>World Bike Co.</td>
            </tr>

            <tr>
              <td>INN:</td>
              <td className={styles.tableInfo}>402573939444</td>
            </tr>

            <tr>
              <td>Legal address:</td>
              <td className={styles.tableInfo}>
                7/8 Dovator str., 1, London, UK
              </td>
            </tr>

            <tr>
              <td>Payment account:</td>
              <td className={styles.tableInfo}>40802810800000085888</td>
            </tr>

            <tr>
              <td>Bank:</td>
              <td className={styles.tableInfo}>"Millenium"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactAbout;
