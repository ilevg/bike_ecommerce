import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Profile.module.scss";
import PersonalData from "./modules/personalData/PersonalData";
import SideMenu from "./modules/sideMenu/SideMenu";
import OrderHistory from "./modules/orderHistory/OrderHistory";
import { ActiveProfileTabContext } from "../../context";

const Profile = (props) => {
  const [email, setEmail] = useState("");
  const [regDate, setRegDate] = useState("");
  const [activeTab] = useContext(ActiveProfileTabContext);
  let userJWT = localStorage.getItem("jwt") || "";

  useEffect(() => {
    if (userJWT.length > 0) {
      let url = `http://bikeecommerce.atwebpages.com/?rest_route=/simple-jwt-login/v1/auth/validate&JWT=${userJWT}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data["success"] === true) {
            setEmail(`Email: ${data["data"]["user"]["user_email"]}`);
            setRegDate(
              `Date of registration: ${data["data"]["user"]["user_registered"]}`
            );
            props.setIsLoggedIn(true);
            props.setServerMessage("");
          } else {
            console.error("Persist failed");
            props.setServerMessage(data["data"]["message"]);
          }
        });
    }
  }, [userJWT, props]);

  const renderContent = () => {
    switch (activeTab) {
      case "history":
        return <OrderHistory />;
      case "data":
        return <PersonalData />;
      default:
        return null;
    }
  };

  return (
    <div className={classNames("container", styles.profile)}>
      <SideMenu userJWT={userJWT} email={email} regDate={regDate} />
      {renderContent()}
    </div>
  );
};

export default Profile;
