import ClipLoader from "react-spinners/ClipLoader";
import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinnerCont}>
      <ClipLoader color="#f57520" size={60} />
    </div>
  )
}

export default Spinner