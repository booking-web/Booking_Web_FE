import styles from "./Background4.module.css"
import { useTranslation } from "react-i18next"
import bg from "../../../images/backgrounds/background4/bg.svg"
import video from "../../../images/backgrounds/background4/video.mp4"
import Title from "../../CommonComponent/ContentComponents/Title"
import GreenButton from "../../CommonComponent/GreenButton"
import BlueButton from "../../CommonComponent/BlueButton"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import Text from "../../CommonComponent/ContentComponents/Text"

const Background4 = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <Title title={t("bg4.title")}></Title>
          <Separator></Separator>
          <Text text={t("home.visits.starting.at.only")}></Text>
          <div className={styles.buttons}>
            <GreenButton content={t("book.home.visit")}></GreenButton>
            <BlueButton content={t("learn.more")}></BlueButton>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <video autoPlay muted loop className={styles.video}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.right}>
        <img src={bg} className={styles.image} />
      </div>
    </div>
  )
}

export default Background4