import React from "react";
import DropdownField from "../../../UI/dropdownField/DropdownField";
import styles from "./ContactQuestion.module.scss";
import { contactQuestions } from "../data";
import classNames from "classnames";

const renderListLinks = (subcategories) =>
  subcategories &&
  subcategories.map((subcategory) => (
    <li key={subcategory}>
      <span>{subcategory}</span>
    </li>
  ));

const ContactQuestion = () => {
  return (
    <div className={classNames("container", styles.contactQuestion)}>
      <h3 className={styles.contactQuestionTitle}>
        Frequently Asked Questions
      </h3>
      <DropdownField
        navLinks={contactQuestions}
        renderChildren={renderListLinks}
      />
    </div>
  );
};

export default ContactQuestion;
