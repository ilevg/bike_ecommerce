import HashLoader from "react-spinners/HashLoader";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <HashLoader color="#F57520" size={90} speedMultiplier={1.6} />
    </div>
  );
};

export default Loader;
