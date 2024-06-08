import styles from "./Background5.module.css"
import { useTranslation } from "react-i18next"
import bg from "../../../images/backgrounds/background5/bg.svg"
import video from "../../../images/backgrounds/background5/video.mp4"
import Title from "../../CommonComponent/ContentComponents/Title"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import icon1 from "../../../images/backgrounds/background5/icon1.svg"
import icon2 from "../../../images/backgrounds/background5/icon2.svg"
import GreenButton from "../../CommonComponent/GreenButton"
import Text from "../../CommonComponent/ContentComponents/Text"

const Background5 = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.videoCover}>
        <video autoPlay muted loop className={styles.video}>
          <source src={video} width="100vh" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image}>
        <img src={bg} />
      </div>
      <div className={styles.content}>
        <Title title={t("bg5.title")}></Title>
        <Separator />
        <Text text={t("bg5.text")}></Text>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={icon1} />
            <span>{t("2h.delivery")}</span>
          </div>
          <div className={styles.icon}>
            <img src={icon2} />
            <span>{t("20%.savings.on.all.products")}</span>
          </div>
        </div>
        <GreenButton content={t("shop.now")}></GreenButton>
      </div>
    </div>
  )
}

export default Background5