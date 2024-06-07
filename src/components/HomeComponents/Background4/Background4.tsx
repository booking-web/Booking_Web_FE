import styles from "./Background4.module.css"
import { useTranslation } from "react-i18next"
import bg from "../../../images/backgrounds/background4/bg.svg"
import video from "../../../images/backgrounds/background4/video.mp4"
import Title from "../../CommonComponent/Title"
import GreenButton from "../../CommonComponent/GreenButton"
import BlueButton from "../../CommonComponent/BlueButton"

const Background4 = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <Title title={t("home.visit")}></Title>
          <div className={styles.separator}></div>
          <div className={styles.text}>{t("home.visits.starting.at.only")} <strong>400.000 đ</strong></div>
          <div className={styles.buttons}>
            <GreenButton content={t("book.home.visit")}></GreenButton>
            <BlueButton content={t("learn.more")}></BlueButton>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <video autoPlay muted loop className={styles.video}>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/webm" />
        </video>
      </div>
      <div className={styles.right}>
        <img src={bg} className={styles.image} />
      </div>
    </div>
  )
}

export default Background4