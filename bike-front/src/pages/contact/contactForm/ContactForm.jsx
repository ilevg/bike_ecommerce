import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className="container">
        <h2 className={styles.contactFormTitle}>
          CONTACT US FOR ANY QUESTIONS
        </h2>
        <form className={styles.form}>
          <div className={styles.contactFormInputs}>
            <input type="text" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div className={styles.contactFormInputs}>
            <input type="tel" placeholder="Phone number" />
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company"
            />
          </div>
          <textarea
            name="textarea"
            id="textarea"
            rows="6"
            placeholder="Message..."
          ></textarea>
          <div>
            <button type="submit">Ask a question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
