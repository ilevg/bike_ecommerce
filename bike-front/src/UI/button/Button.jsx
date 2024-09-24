import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  onClick,
  width = "",
  text,
  imgUrl,
  alt,
  disabled = false,
}) => {
  const btnStyle = {
    width: width,
  };
  const handleDisabledClass = disabled && styles.btnDisabled;
  return (
    <button
      onClick={onClick}
      className={classNames(styles.btn, handleDisabledClass)}
      style={btnStyle}
      disabled={disabled}
    >
      <img src={imgUrl} alt={alt} />
      <span>{text}</span>
    </button>
  );
};

export default Button;
