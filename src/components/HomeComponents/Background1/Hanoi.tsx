import styles from "./Background1.module.css"
import { useTranslation } from "react-i18next"
import location from "../../../images/backgrounds/background1/location.svg"
import clock from "../../../images/backgrounds/background1/clock.svg"

const Hanoi = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.itemHN}>
      <div className={styles.imageHN}></div>
      <div className={styles.infoHN}>
        <h2 className={styles.titleHN}>Capital Place Smart Clinic</h2>
        <div className={styles.infos}>
          <div className={styles.info1}>
            <img src={location} className={styles.icon} />
            <div>{t("building4")}</div>
          </div>
          <div className={styles.info2}>
            <img src={clock} className={styles.icon} />
            <div>7:00 - 20:00 {t("every.day")}</div>
          </div>
          <div className={styles.HN}>
            <div className={styles.nextBooking}>{t("next.booking.time")}</div>
            <div className={styles.btns}>
              <button className={styles.btn1}>{t("call.now")}</button>
              <button className={styles.btn2}>{t("make.an.appointment")}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hanoi