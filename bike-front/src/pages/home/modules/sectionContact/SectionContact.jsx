import React from "react";
import HomeSectionTitle from "../../ui/homeSectionTitle/HomeSectionTitle";
import styles from "./SectionContact.module.scss";

import mail from "../../../../assets/img/footer/mail.png";
import phone from "../../../../assets/img/footer/phone.png";
import navigator from "../../../../assets/img/footer/navigator.png";
import GoogleMap from "../../../../UI/googleMap/GoogleMap";

const SectionContact = () => {
  return (
    <div>
      <div className="container">
        <HomeSectionTitle titleText="contact" />
      </div>
      <GoogleMap />
      <div className="container">
        <ul className={styles.contactList}>
          <li className={styles.contantListItem}>
            <img className={styles.cantactIcon} src={phone} alt="phone" />
            <div>
              <a href="tel:+13242342343">+1(324)234-23-43</a>
              <div>
                <a href="tel:+13242652356">+1(324)265-23-56</a>
              </div>
            </div>
          </li>

          <li className={styles.contantListItem}>
            <img
              className={styles.cantactIcon}
              src={navigator}
              alt="navigator"
            />
            <div>
              <span>
                London,
                <br />
                Centrum str, 7/8
              </span>
            </div>
          </li>

          <li className={styles.contantListItem}>
            <img className={styles.cantactIcon} src={mail} alt="mail" />
            <a href="mailto:worlbike@mail.com">worlbike@mail.com</a>
          </li>

          <li className={styles.contantListItem}>
            <img
              className={styles.cantactIcon}
              src={navigator}
              alt="navigator"
            />
            <div>
              <span>
                Seven days a week
                <br />
                10:00-20:00
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionContact;
