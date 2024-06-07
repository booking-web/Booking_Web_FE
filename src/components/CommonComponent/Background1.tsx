import styles from "./index.module.css"
import bg3 from "../../images/backgrounds/background1/bg3.svg"
import { IChildren } from "../../models";

const Background1 = ({ children }: IChildren) => {

  return (
    <div>
      <div className={styles.image}>
        {children}
        <img src={bg3} className={styles.img} />
      </div>
    </div>
  )
}

export default Background1