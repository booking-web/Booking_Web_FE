import styles from "./index.module.css"
import { ITitle } from "../../../models"

const AdminTitle = ({ title }: ITitle) => {
  return (
    <h3 className={styles.adminTitle}>{title}</h3>
  )
}

export default AdminTitle