import styles from "./Background1.module.css"
import { useTranslation } from "react-i18next"
import location from "../../../images/backgrounds/background1/location.svg"
import clock from "../../../images/backgrounds/background1/clock.svg"

const Saigon = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.SGContainer}>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.image} id={styles.item1}></div>
          <div className={styles.infos}>
            <h4>M Plaza</h4>
            <div className={styles.info1}>
              <img src={location} className={styles.icon} />
              <div>{t("building1")}</div>
            </div>
            <div className={styles.info2}>
              <img src={clock} className={styles.icon} />
              <div>7:00 - 20:00 {t("every.day")}</div>
            </div>
            <div className={styles.nextBooking}>{t("next.booking.time")}</div>
            <div className={styles.btns}>
              <button className={styles.btn1}>{t("call.now")}</button>
              <button className={styles.btn2}>{t("make.an.appointment")}</button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image} id={styles.item2}></div>
          <div className={styles.infos}>
            <h4>Republic Plaza</h4>
            <div className={styles.info1}>
              <img src={location} className={styles.icon} />
              <div>{t("building2")}</div>
            </div>
            <div className={styles.info2}>
              <img src={clock} className={styles.icon} />
              <div>7:00 - 20:00 {t("every.day")}</div>
            </div>
            <div className={styles.nextBooking}>{t("next.booking.time")}</div>
            <div className={styles.btns}>
              <button className={styles.btn1}>{t("call.now")}</button>
              <button className={styles.btn2}>{t("make.an.appointment")}</button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image} id={styles.item3}></div>
          <div className={styles.infos}>
            <h4>Q2 Thao Dien</h4>
            <div className={styles.info1}>
              <img src={location} className={styles.icon} />
              <div>{t("building3")}</div>
            </div>
            <div className={styles.info2}>
              <img src={clock} className={styles.icon} />
              <div>7:00 - 20:00 {t("every.day")}</div>
            </div>
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

export default Saigon