import React from "react";
import styles from "./GoogleMap.module.scss";
const GoogleMap = () => {
  return (
    <div className={styles.map}>
      <div className={styles.mapBg}></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4962.517193896653!2d-0.141591!3d51.545157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae2983fe5e3%3A0xbeb2b0f195d7477!2s147%20Kentish%20Town%20Rd%2C%20London%20NW1%208PB%2C%20UK!5e0!3m2!1sen!2spl!4v1708024011198!5m2!1sen!2spl"
        title="Google Map"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
