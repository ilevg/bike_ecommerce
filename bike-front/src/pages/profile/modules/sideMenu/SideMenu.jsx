import classNames from "classnames";
import React, { useContext } from "react";
import { ActiveProfileTabContext } from "../../../../context";
import styles from "./SideMenu.module.scss";

const SideMenu = ({ email, regDate, userJWT }) => {
  const [activeTab, setActiveTab] = useContext(ActiveProfileTabContext);

  const getButtonClassName = (tabName) =>
    classNames(styles.btn, {
      [styles.btnActive]: activeTab === tabName,
    });
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.replace("http://localhost:3000/authentication");
  };

  return (
    <div className={styles.sideMenu}>
      <h3 className={styles.subtitle}>My profile</h3>
      <div className={styles.userInfo}>
        {userJWT ? (
          <>
            <p>{email}</p>
            <p>{regDate}</p>
          </>
        ) : (
          <p className={styles.userNotLoggedIn}>
            You are not currently logged in. Please login to see your user
            profile'
          </p>
        )}
      </div>

      <button
        onClick={() => handleTabClick("history")}
        className={getButtonClassName("history")}
        type="button"
      >
        Order history
      </button>
      <button
        onClick={() => handleTabClick("data")}
        className={getButtonClassName("data")}
        type="button"
      >
        Personal data
      </button>
      <button className={styles.exitBtn} type="button" onClick={handleLogout}>
        Exit
      </button>
    </div>
  );
};
export default SideMenu;
