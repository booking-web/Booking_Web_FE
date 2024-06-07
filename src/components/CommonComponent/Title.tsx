import styles from "./index.module.css"
import { ITitle } from "../../models"

const Title = ({ title }: ITitle) => {
  return (
    <h3 className={styles.title}>{title}</h3>
  )
}

export default Title