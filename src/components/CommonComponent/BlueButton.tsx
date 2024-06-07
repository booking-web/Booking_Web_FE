import { IButton } from '../../models'
import styles from "./index.module.css"

const BlueButton = ({ content }: IButton) => {
  return (
    <button className={styles.blueBtn}>{content}</button>
  )
}

export default BlueButton