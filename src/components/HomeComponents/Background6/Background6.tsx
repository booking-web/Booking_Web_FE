import styles from "./Background6.module.css"
import bg from "../../../images/backgrounds/background6/bg.svg"
import Title from "../../CommonComponent/ContentComponents/Title"
import { useTranslation } from "react-i18next"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import Text from "../../CommonComponent/ContentComponents/Text"
import icon1 from "../../../images/backgrounds/background6/icon1.svg"
import icon2 from "../../../images/backgrounds/background6/icon2.svg"
import GreenButton from "../../CommonComponent/GreenButton"

const Background6 = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img style={{ height: "55vw" }} src={bg} />
      </div>
      <div className={styles.content}>
        <Title title={t("bg6.title")}></Title>
        <Separator />
        <Text text={t("bg6.text")}></Text>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={icon1} />
            <span>{t("home.doctor.&.nursing.services")}</span>
          </div>
          <div className={styles.icon}>
            <img src={icon2} />
            <span>{t("home.lab.collection")}</span>
          </div>
        </div>
        <GreenButton content={t("learn.more")}></GreenButton>
      </div>
    </div>
  )
}

export default Background6