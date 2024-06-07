import { IButton } from '../../models'
import styles from "./index.module.css"

const GreenButton = ({ content }: IButton) => {
  return (
    <button className={styles.greenBtn}>{content}</button>
  )
}

export default GreenButton