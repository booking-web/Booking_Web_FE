import styles from "./index.module.css"
import { useTranslation } from "react-i18next"
import icon from "../../../images/DoctorsPage_images/Header/icon.svg"

const DoctorBanner = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.bg1} id={styles.bg}></div>
      <div className={styles.bg2} id={styles.bg}></div>
      <div className={styles.bg4} id={styles.bg}></div>
      <div className={styles.contents}>
        <div className={styles.title}>{t("doctors.bg.title")}</div>
        <div className={styles.content1}>
          <img src={icon} />
          <div className={styles.text}>{t("doctors.bg.content1")}</div>
        </div>
        <div className={styles.content2}>{t("doctors.bg.content2")}</div>
      </div>
    </div>
  )
}

export default DoctorBanner