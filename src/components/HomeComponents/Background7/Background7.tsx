import styles from "./Background7.module.css"
import { useTranslation } from "react-i18next"
import bg from "../../../images/backgrounds/background7/bg.png"
import Title from "../../CommonComponent/ContentComponents/Title"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import Text from "../../CommonComponent/ContentComponents/Text"
import icon1 from "../../../images/backgrounds/background7/icon1.svg"
import icon2 from "../../../images/backgrounds/background7/icon2.svg"

const Background7 = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img style={{ width: "85vw" }} src={bg} />
      </div>
      <div className={styles.content}>
        <Title title={t("bg7.title")}></Title>
        <Separator></Separator>
        <Text text={t("bg7.text")}></Text>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={icon1} />
            <span>{t("video.call.with.doctors")}</span>
          </div>
          <div className={styles.icon}>
            <img src={icon2} />
            <span>{t("chat.with.care.professionals")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background7