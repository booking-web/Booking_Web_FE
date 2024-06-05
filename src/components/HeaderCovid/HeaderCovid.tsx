import styles from "./HeaderCovid.module.css"
import { useTranslation } from "react-i18next"
import red from "../../images/headerCovid_images/red.svg"
import blue from "../../images/headerCovid_images/blue.svg"

const HeaderCovid = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <img src={red} className={styles.red1} />
      <img src={blue} className={styles.blue1} />
      <div className={styles.title}>{t("covid")}</div>
      <button className={styles.btn}>{t("explore.further")}</button>
      <img src={red} className={styles.red2} />
      <img src={blue} className={styles.blue2} />
    </div>
  )
}

export default HeaderCovid