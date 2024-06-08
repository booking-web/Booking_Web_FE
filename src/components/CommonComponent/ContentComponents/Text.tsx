import styles from "./index.module.css"
import { IText } from "../../../models"

const Text = ({ text }: IText) => {
  return (
    <div className={styles.text}>{text}</div>
  )
}

export default Text