import styles from "./Backgrounds.module.css"
import bg3 from "../../images/backgrounds/background1/bg3.svg"
import { IChildren } from "../../models";
import Background2 from "../HomeComponents/Background2/Background2";

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