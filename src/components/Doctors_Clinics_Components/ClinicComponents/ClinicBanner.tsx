import styles from "./index.module.css"
import Title from "../../CommonComponent/ContentComponents/Title"
import { useTranslation } from "react-i18next"

const ClinicBanner = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className="">
          {t("clinic.bg.title1")}
          <span className={styles.highlight}> 30+ </span>
          {t("clinic.bg.title2")}
          <span className={styles.highlight}> 200+ </span>
          {t("clinic.bg.title3")}
        </div>
        <button className={styles.btn}>{t("learn.more")}</button>
      </div>
    </div>
  )
}

export default ClinicBanner